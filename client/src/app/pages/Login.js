import React, { Component } from 'react';
import { Header } from '../components/Header/Header.js'
import { NameForm } from '../components/LoginForm/loginform.js'

class Login extends Component {
  render() {
    return (
        <div className="App">
    <Header></Header>
        <br></br>
        <br></br>
      <h1>Login Page</h1>
      <NameForm></NameForm>
    </div>
    );
  }
}
export default Login;