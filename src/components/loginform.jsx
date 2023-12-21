import React, { useState } from 'react';
import "./loginform.css";

export const LoginForm = (props) => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
  }

  const sendMessage = () => {
    console.log('hello backend')
    fetch('/api', )
     .then(() => response.json())
     .catch(() => console.log('errorrrr'))
  }

  return (
    <div className="auth-form-container">
      <h1>Login</h1>
    <form className="login-form" onSubmit={submitHandler}>
      <input value={username} onChange={(event) => setUsername(event.target.value)} type ="text" placeholder="username"/>
      <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password"/>

      <button className="login-btn" type="submit">Login</button>

      <p className ="text">or Login using</p>
      <div className ="alt-login">
        <div className ="google"></div>
      </div>
    </form>
      <button className="link-to-signup" onClick={() => props.onFormSwitch('Signup')}>Don't have an account? Register here.</button>
      <button className="backend-btn" onClick={sendMessage}>Talk to Backend</button>
    
    </div>
  )
}
