import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';
import Products from './components/pages/Products/Products';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services}/>
        <Route path='/sign-up' component={SignUp}/>
        <Route path='/products' component={Products}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
