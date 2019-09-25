import React, { Component } from 'react';
import LeftSideBar from './components/LeftSideBar';
import LandingPage from './views/LandingPage';
import ScrollDownArrow from './components/ScrollDown';
import './App.scss';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="wave" />
          <LeftSideBar />
          <ScrollDownArrow />
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
