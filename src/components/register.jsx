import React, { useState } from 'react';
import "./register.css";

export const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setName] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
  }

  const submitUser = () => {
    const userInfo = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, fullName }), // Use state values directly
    };

    fetch('/api', userInfo)
      .then((data) => data.json())
      .then((responseData) => {
        console.log(responseData);
        // Handle success response
      })
      .catch((error) => {
        console.error('Error when submitting user info', error);
        // Handle error
      });
  }

  return (
    <div className="register-form-container">
      <h1>Signup</h1>
      <form className="signup-form" onSubmit={submitHandler}>
        <input value={fullName} onChange={(event) => setName(event.target.value)} type="text" placeholder="Full Name" />
        <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" placeholder="username" />
        <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="password" />

        <button className="signup-btn" type="submit" onClick={submitUser}>Signup</button>

        <p className="text">or Login using</p>
        <div className="alt-login">
          <div className="google"></div>
        </div>
      </form>
      <button className="link-to-Login" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  );
}