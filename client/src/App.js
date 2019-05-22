import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './app/pages/Dashboard';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <div className="App">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css"></link>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"></link>
    <link href="https://fonts.googleapis.com/css?family=Bree+Serif&display=swap" rel="stylesheet"></link>
    </div>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;