import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import { UsernameField, PasswordField } from './Auth/Fields';
import Auth0 from './Auth/Auth0';

export default function Login(props) {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  
  async function handleSubmit(event) {
    event.preventDefault();
    if (isLoading) return;
    setLoading(true);
    
    const form = event.target;
    const email = form.elements.formUsername.value;
    const password = form.elements.formPassword.value;
    
    const reqBody = { email, password };
    console.dir(reqBody);

    try {
      console.log(`${process.env.REACT_APP_API_URL}/validate`);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/validate`,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(reqBody)
        }
      );
      
      const resBody = await response.json();
      console.dir(resBody);
    
      if (resBody.data) {
        props.setUser(resBody.data);
        history.push('/assess');
      } else {
        window.alert('Invalid email or password, please try again');
      }
    } catch (error) {
      console.log(error);
      window.alert('Failed to contact server :(');
    }
    
    setLoading(false);
  }


  
  return (
    <div className='align-center width-40-on-desktop'>
      <h1>Log in</h1>
      <Form className='fullwidth' onSubmit={handleSubmit}>
        <UsernameField/>
        <PasswordField/>
        <Button className='fullwidth' variant="primary" disabled={isLoading} type="submit">
          {!isLoading ? 'Log in' : 'Logging in…'}
        </Button>
        <div className='fullwidth flex-row gap-2'>
          <Button className='fullwidth' variant='primary' onClick={() => history.push('/register')}>Don't have an account</Button>
        </div>
      </Form>
      <Auth0/>
    </div>
  );
}
