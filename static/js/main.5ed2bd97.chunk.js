(this.webpackJsonpcompanion=this.webpackJsonpcompanion||[]).push([[0],{17:function(e,t,o){},41:function(e,t,o){},43:function(e,t,o){},53:function(e,t,o){},62:function(e,t,o){},63:function(e,t,o){},64:function(e,t,o){"use strict";o.r(t);var a,n,r=o(0),s=o.n(r),c=o(18),i=o.n(c),l=(o(41),o(9)),d=o(16),u=o(7),j=(o(17),o(11)),m=o.n(j),p=o(14),b=(o(43),o(8)),h=o(10),x=o(24),O=o.n(x),f=o(1);function v(){return(v=Object(p.a)(m.a.mark((function e(t,o){var r,s,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start recording"),e.next=3,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/assemblyai"));case 3:return r=e.sent,e.next=6,r.json();case 6:return(s=e.sent).error&&alert(s.error),c=s.token,e.next=11,new WebSocket("wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=".concat(c));case 11:a=e.sent,i={},a.onmessage=function(e){var a=t,n=JSON.parse(e.data);console.dir(n),i[n.audio_start]=n.text,console.dir(i);var r=Object.keys(i);r.sort((function(e,t){return e-t}));for(var s=0,c=r;s<c.length;s++){var l=c[s];i[l]&&(a+=" ".concat(i[l]))}o(a)},a.onerror=function(e){console.error(e),a.close()},a.onclose=function(e){console.log(e),a=null},a.onopen=function(){navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){(n=new O.a(e,{type:"audio",mimeType:"audio/webm;codecs=pcm",recorderType:x.StereoAudioRecorder,timeSlice:250,desiredSampRate:16e3,numberOfAudioChannels:1,bufferSize:4096,audioBitsPerSecond:128e3,ondataavailable:function(e){var t=new FileReader;t.onload=function(){var e=t.result;a&&a.send(JSON.stringify({audio_data:e.split("base64,")[1]}))},t.readAsDataURL(e)}})).startRecording()})).catch((function(e){return console.error(e)}))};case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("stop recording"),a&&(a.send(JSON.stringify({terminate_session:!0})),a.close(),a=null),n&&(n.pauseRecording(),n=null);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var t=Object(r.useState)(!1),o=Object(l.a)(t,2),a=o[0],n=o[1];return Object(f.jsx)(h.a,{size:"sm",className:"record-button",variant:"outline-danger",onClick:function(){a?function(){g.apply(this,arguments)}():function(e,t){v.apply(this,arguments)}(e.text,e.setText),n(!a)},children:a?"Stop":"Record"})}function y(e){var t,o;return Object(f.jsx)(b.a.Group,{className:"mb-2",controlId:null!==(t=e.controlId)&&void 0!==t?t:"formUsername",children:Object(f.jsx)(b.a.Control,{type:"email",placeholder:null!==(o=e.label)&&void 0!==o?o:"Email address"})})}function N(e){var t,o;return Object(f.jsx)(b.a.Group,{className:"mb-2",controlId:null!==(t=e.controlId)&&void 0!==t?t:"formPassword",children:Object(f.jsx)(b.a.Control,{type:"password",placeholder:null!==(o=e.label)&&void 0!==o?o:"Password"})})}function M(e){return Object(f.jsx)(b.a.Group,{className:"mb-2",controlId:e.controlId,children:Object(f.jsx)(b.a.Control,{type:"text",placeholder:e.label,value:e.value})})}function k(e){return Object(f.jsxs)(b.a.Group,{className:"mb-2 flex-row",controlId:e.controlId,children:[Object(f.jsx)(b.a.Control,{type:"text",placeholder:e.label,value:e.value,onChange:function(t){return e.setValue(t.target.value)}}),Object(f.jsx)(w,{text:e.value,setText:e.setValue})]})}var S=function(e){var t=Object(u.f)(),o=Object(r.useState)(!1),a=Object(l.a)(o,2),n=a[0],s=a[1];function c(){return(c=Object(p.a)(m.a.mark((function o(a){var r,c,i,l,d,u,j,p;return m.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a.preventDefault(),!n){o.next=3;break}return o.abrupt("return");case 3:return s(!0),r=a.target,c=r.elements.formFirstName.value,i=r.elements.formLastName.value,l=r.elements.formUsername.value,d=r.elements.formPassword.value,u={firstName:c,lastName:i,email:l,password:d,logs:[]},o.prev=10,o.next=13,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/users"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(u)});case 13:return j=o.sent,o.next=16,j.json();case 16:p=o.sent,console.dir(p),p.error?window.alert("Couldn't create the account"):(e.setUser(u),t.push("/assess")),o.next=25;break;case 21:o.prev=21,o.t0=o.catch(10),console.log(o.t0),window.alert("Failed to contact server :(");case 25:s(!1);case 26:case"end":return o.stop()}}),o,null,[[10,21]])})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"reg-container align-center",children:[Object(f.jsx)("h1",{children:"Register"}),Object(f.jsxs)(b.a,{className:"reg width-30",onSubmit:function(e){return c.apply(this,arguments)},children:[Object(f.jsx)(M,{controlId:"formFirstName",label:"First name"}),Object(f.jsx)(M,{controlId:"formLastName",label:"Last name"}),Object(f.jsx)(y,{}),Object(f.jsx)(N,{}),Object(f.jsx)(N,{controlId:"formConfirmPassword",label:"Re-enter password"}),Object(f.jsx)(h.a,{className:"fullwidth",variant:"primary",disabled:n,type:"submit",children:n?"Registering\u2026":"Register"}),Object(f.jsx)("div",{className:"login-link-container",children:Object(f.jsx)(h.a,{className:"fullwidth",variant:"primary",onClick:function(){return t.push("/login")},children:"Log into existing account"})})]})]})};function C(e){var t=Object(u.f)(),o=Object(r.useState)(!1),a=Object(l.a)(o,2),n=a[0],s=a[1];function c(){return(c=Object(p.a)(m.a.mark((function o(a){var r,c,i,l,d,u;return m.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a.preventDefault(),!n){o.next=3;break}return o.abrupt("return");case 3:return s(!0),r=a.target,c=r.elements.formUsername.value,i=r.elements.formPassword.value,l={email:c,password:i},console.dir(l),o.prev=9,console.log("".concat("https://companion-htv5.herokuapp.com/api/v1","/validate")),o.next=13,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/validate"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(l)});case 13:return d=o.sent,o.next=16,d.json();case 16:u=o.sent,console.dir(u),u.data?(e.setUser(u.data),t.push("/assess")):window.alert("Invalid email or password, please try again"),o.next=25;break;case 21:o.prev=21,o.t0=o.catch(9),console.log(o.t0),window.alert("Failed to contact server :(");case 25:s(!1);case 26:case"end":return o.stop()}}),o,null,[[9,21]])})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"align-center",children:[Object(f.jsx)("h1",{children:"Log in"}),Object(f.jsxs)(b.a,{className:"width-30",onSubmit:function(e){return c.apply(this,arguments)},children:[Object(f.jsx)(y,{}),Object(f.jsx)(N,{}),Object(f.jsx)(h.a,{className:"fullwidth",variant:"primary",disabled:n,type:"submit",children:n?"Logging in\u2026":"Log in"})]})]})}o(53);var I=o(36);function T(){var e=Object(u.f)();return Object(f.jsx)(I.a,{steps:[{style:{transform:"translate(0,-500px)"},duration:0},{style:{transform:"translate(0,0)"},duration:800}],children:Object(f.jsxs)("div",{className:"align-center",children:[Object(f.jsx)("h1",{children:"Companion"}),Object(f.jsx)("h2",{children:"your mindfulness buddy"}),Object(f.jsx)(h.a,{className:"wide get-started",size:"lg",variant:"primary",onClick:function(){return e.push("/register")},children:"Get Started"})]})})}o(62);function R(e){var t=Object(u.f)(),o=Object(r.useState)(!1),a=Object(l.a)(o,2),n=a[0],s=a[1],c=Object(r.useState)(!1),i=Object(l.a)(c,2),d=i[0],j=i[1],x=Object(r.useState)(null),O=Object(l.a)(x,2),v=O[0],g=O[1],w=Object(r.useState)(""),y=Object(l.a)(w,2),N=y[0],M=y[1];function S(e){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark((function t(o){var a,r,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o.preventDefault(),!n){t.next=3;break}return t.abrupt("return");case 3:return s(!0),a={mood:v,message:N},t.prev=5,t.next=8,fetch("".concat("https://companion-htv5.herokuapp.com/api/v1","/").concat(e.user._id,"/logs"),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 8:return r=t.sent,t.next=11,r.json();case 11:c=t.sent,console.dir(c),c.error?(console.dir(c.error),window.alert("Couldn't save, please try again")):j(!0),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(5),console.dir(t.t0),window.alert("Failed to contact server :(");case 20:s(!1);case 21:case"end":return t.stop()}}),t,null,[[5,16]])})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"align-center flex-column gap-4",children:[Object(f.jsxs)("h1",{children:["Welcome back, ",e.user.firstName]}),Object(f.jsx)("h2",{children:"How are you feeling today?"}),Object(f.jsx)(U,{mood:v,setMood:g}),Object(f.jsxs)(b.a,{className:"width-50",onSubmit:S,children:[Object(f.jsx)(k,{controlId:"formMessage",label:"Describe your day\u2026",value:N,setValue:M}),Object(f.jsx)(h.a,{className:"fullwidth",variant:d?"success":"primary",onClick:S,disabled:!v||n||d,children:n?"Saving\u2026":d?"Entry saved":"Save"})]}),Object(f.jsx)(h.a,{className:"",variant:"primary",onClick:function(){console.log("Clicked!"),t.push("/companion")},children:"Talk to someone"})]})}function U(e){return Object(f.jsxs)("div",{className:"mood-chooser",children:[Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\u263a\ufe0f"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude04"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude00"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude42"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude10"}),Object(f.jsx)("hr",{}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude15"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\u2639\ufe0f"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude14"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude25"}),Object(f.jsx)(P,{currentMood:e.mood,setMood:e.setMood,mood:"\ud83d\ude2d"})]})}function P(e){return Object(f.jsx)(h.a,{size:"sm",variant:"primary",className:"mood-button ",active:e.currentMood==e.mood,onClick:function(){return e.setMood(e.mood)},children:e.mood})}o(63);var F=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),o=(t[0],t[1],Object(r.useState)("")),a=Object(l.a)(o,2),n=a[0],s=a[1];return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Companion"}),Object(f.jsx)("div",{className:"messages-view-container",children:Object(f.jsx)("div",{className:"messages-view",children:Object(f.jsx)("div",{className:"message",children:Object(f.jsx)("h1",{children:"Hello"})})})}),Object(f.jsx)(b.a,{className:"message-input",children:Object(f.jsx)(b.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(f.jsx)(b.a.Control,{as:"textarea",placeholder:"Type message here",rows:3})})}),Object(f.jsx)(k,{controlId:"formMessage",label:"Type Message Here",value:n,setValue:s})]})};var J=function(){var e=Object(r.useState)({_id:123,email:"demo@demo.user",firstName:"Demo",lastName:"User",password:"password",logs:[]}),t=Object(l.a)(e,2),o=t[0],a=t[1];return Object(f.jsx)("div",{className:"App flex-column",children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(u.c,{children:[Object(f.jsx)(u.a,{exact:!0,path:"/",children:Object(f.jsx)(T,{})}),Object(f.jsx)(u.a,{exact:!0,path:"/login",children:Object(f.jsx)(C,{setUser:a})}),Object(f.jsx)(u.a,{exact:!0,path:"/register",children:Object(f.jsx)(S,{setUser:a})}),Object(f.jsx)(u.a,{exact:!0,path:"/assess",children:Object(f.jsx)(R,{user:o})}),Object(f.jsx)(u.a,{exact:!0,path:"/companion",children:Object(f.jsx)(F,{})})]})})})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(J,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.5ed2bd97.chunk.js.map