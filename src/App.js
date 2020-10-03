import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Navbar} />
      </Switch>
        
    </Router>
  );
}

export default App;
