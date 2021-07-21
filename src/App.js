import Form from './Components/Form';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    termsOfService: false
  })

  function onChangeHandler(e) {
    const { name, value, checked, type} = e.target;
    const valueToChange = type === 'text' ? value : checked;
    setFormValues({ ...formValues, [name]: valueToChange})
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  const inputs = [
  {
    type: 'text',
    name: 'name'
  },
  {
  type: 'text',
  name: 'email'
  },
  {
  type: 'text',
  name: 'password'
  },
  {
  type: 'checkbox',
  name: 'termsOfService'
  }]
  return (
    <div className="App">
      <Form inputs={inputs} formValues={formValues} onChangeHandler={onChangeHandler} onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
