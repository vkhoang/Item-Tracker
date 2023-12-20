import React, { useState } from 'react';
import "./register.css";

export const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
}

  return (
    <div className="register-form-container">
      <h1>Signup</h1>
    <form className="signup-form" onSubmit={submitHandler}>
      <input value ={name} namee="name" onChange={(event) => setName(event.target.value)} type="text" placeholder="Full Name"/>
      <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
      <input value={password} onChange={(event) => setPassword(event.target.value)}type="password" placeholder="password"/>
      <input type="password" placeholder="confirm password"></input>

      <button className="signup-btn" type="submit">Signup</button>

      <p className ="text">or Login using</p>
      <div className ="alt-login">
        <div className ="google"></div>
      </div>
    </form>
    </div>
  )
}