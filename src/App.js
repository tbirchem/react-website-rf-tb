import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/HeroSection'
import Home from './components/pages/Home'
import Cut from './components/pages/Cut'
import Color from './components/pages/Color'
import Clarity from './components/pages/Clarity'
import Questionnaire from './components/pages/Questionnaire'
import Shop from './components/pages/Shop'
import ScrollToTop from './components/ScrollToTop.js'

function App() {
  return (
  <div>
    <Router>
      <ScrollToTop/>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cut' component={Cut}/>
          <Route path='/color' component={Color}/>
          <Route path='/clarity' component={Clarity}/>
          <Route path='/questionnaire' component={Questionnaire}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
