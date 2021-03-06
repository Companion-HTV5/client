import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';

let isRecording = false;
let socket;
let recorder;

async function startRecording(text, setText) {
  console.log('start recording');
  
  const response = await fetch(`${process.env.REACT_APP_API_URL}/assemblyai`); // get temp session token from server.js (backend)
  const data = await response.json();

  if (data.error) {
    alert(data.error)
  }

  const { token } = data;

  // establish wss with AssemblyAI (AAI) at 16000 sample rate
  socket = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

  // handle incoming messages to display transcription to the DOM
  const texts = {};
  socket.onmessage = (message) => {
    let msg = text;
    const res = JSON.parse(message.data);
    console.dir(res);
    texts[res.audio_start] = res.text;
    console.dir(texts);
    const keys = Object.keys(texts);
    keys.sort((a, b) => a - b);
    for (const key of keys) {
      if (texts[key]) {
        msg += ` ${texts[key]}`;
      }
    }
    setText(msg);
  };

  socket.onerror = (event) => {
    console.error(event);
    socket.close();
  }

  socket.onclose = event => {
    console.log(event);
    socket = null;
  }

  socket.onopen = () => {
    // once socket is open, begin recording
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        recorder = new RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
          recorderType: StereoAudioRecorder,
          timeSlice: 250, // set 250 ms intervals of data that sends to AAI
          desiredSampRate: 16000,
          numberOfAudioChannels: 1, // real-time requires only one channel
          bufferSize: 4096,
          audioBitsPerSecond: 128000,
          ondataavailable: (blob) => {
            const reader = new FileReader();
            reader.onload = () => {
              const base64data = reader.result;

              // audio data must be sent as a base64 encoded string
              if (socket) {
                socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
              }
            };
            reader.readAsDataURL(blob);
          },
        });

        recorder.startRecording();
      })
      .catch((err) => console.error(err));
  };
}

async function stopRecording() {
  console.log('stop recording');
  
  if (socket) {
    socket.send(JSON.stringify({terminate_session: true}));
    socket.close();
    socket = null;
  }

  if (recorder) {
    recorder.pauseRecording();
    recorder = null;
  }
}

export default function Recorder(props) {
  const [isRecording, setRecording] = useState(false);
  function handleClick() {
    if (isRecording) stopRecording();
    else startRecording(props.text, props.setText);
    setRecording(!isRecording);
  }
  return (
    <Button size='sm' className='record-button' variant='outline-danger' onClick={handleClick}>
      {isRecording ? 'Stop' : 'Record'}
    </Button>
  );
}
