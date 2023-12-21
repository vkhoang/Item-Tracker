import React, { useState } from 'react';
import { LoginForm } from './loginform.jsx';
import { Register } from './register.jsx';
import '../styles.css'

const App = () => {
  const [currentForm, setCurretForm] = useState('login');

  const switchForm = (formName) => {
    setCurretForm(formName);
  }

  return (
    <div>
       {
        currentForm === 'login' ? <LoginForm onFormSwitch={switchForm} /> : <Register onFormSwitch={switchForm} />
      }
    </div>
  );
}


export default App;