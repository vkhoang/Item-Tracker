import React, { useState } from 'react';
import "./loginform.css";

export const LoginForm = (props) => {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
  }

  const authUser = () => {
    const loginInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }), // Use state values directly
    };

    fetch('/api/login', loginInfo)
      // .then((data) => data.json())
      .then((data) => {
        console.log(data)
        // Handle success response
      })
      .catch((error) => {
        console.error('Error when logging in', error);
        // Handle error
      });
  }

  return (
    <div className="auth-form-container">
      <h1>Login</h1>
    <form className="login-form" onSubmit={submitHandler}>
      <input value={username} onChange={(event) => setUsername(event.target.value)} type ="text" placeholder="username"/>
      <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password"/>

      <button className="login-btn" type="submit" onClick={authUser}>Login</button>

      <p className ="text">or Login using</p>
      <div className ="alt-login">
        <div className ="google"></div>
      </div>
    </form>
      <button className="link-to-signup" onClick={() => props.onFormSwitch('Signup')}>Don't have an account? Register here.</button>
  
    </div>
  )
}
