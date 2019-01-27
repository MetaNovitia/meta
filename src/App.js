import React, { Component } from 'react';
import Home from './components/Home/Home'
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
    );
  }
}

export default App;
