import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';

import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
  <Router>
    <Header />
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
  
    </Switch>
  </Router>
  );
}

export default App;




