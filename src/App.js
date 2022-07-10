import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/HeroSection'
import Home from './components/pages/Home'
import Cut from './components/pages/Cut'
import Color from './components/pages/Color'
import Result from './components/pages/Result'
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
          <Route path='/result' component={Result}/>
          <Route path='/questionnaire' component={Questionnaire}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
