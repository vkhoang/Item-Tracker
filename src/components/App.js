import React, { useState } from 'react';
import { LoginForm } from './loginform.jsx';
import { Register } from './register.jsx';
import '../styles.css'
//import LoginForm from './loginform';

const App = () => {
  const [currentForm, setCurretForm] = useState('login');

  const toggleForm = (formName) => {
    setCurretForm(formName);
  }

  return (
    <div>
       {
        currentForm === 'login' ? <LoginForm onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}


export default App;