import Form from './Components/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import schema from './Validation/formSchema';
import * as yup from 'yup';
import './App.css';
import Users from './Components/Users';

function App() {
  const defaultForm = {
    name: '',
    email: '',
    password: '',
    termsOfService: false
  }
  const [disabled, setDisabled] = useState(true);
  const [formValues, setFormValues] = useState(defaultForm)
  const [users, setUsers] = useState([]);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    termsOfService: false
  });

  const setFormErrors = (name, value) => { 
    yup
      .reach(schema, name) //Reach into schema, look at the key (name)
      .validate(value) // Look at the value associated with the key, does it pass the tests?
      .then(() => setErrors({ ...errors, [name]: "" })) //if it validates, reset errors to default
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] })); //if it fails to validate, update the key with the defined error in schema
  };

  function onChangeHandler(e) {
    const { name, value, checked, type} = e.target;
    const valueToChange = type === 'text' ? value : checked;
    setFormErrors(name, valueToChange); //Call setFormErrors with the name of the event, and the value to use (use) or (checked);
    setFormValues({ ...formValues, [name]: valueToChange}); //Pass in a copy of the current form values, the updated key, and value.
  }

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService
    };
    axios.post('https://reqres.in/api/user', newUser)
      .then((res) => {
        console.log(res); // update user state
        setFormValues(defaultForm);
        setUsers([...users, newUser]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

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
      <div style={{color: 'red'}}>
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.termsOfService}</div>
      </div>
      <Form inputs={inputs} formValues={formValues} onChangeHandler={onChangeHandler} onSubmit={onSubmit} disabled={disabled}/>
      {
        users.map((user, index) => <Users key={index} user={user}/>)
      }
    </div>
  );
}

export default App;
