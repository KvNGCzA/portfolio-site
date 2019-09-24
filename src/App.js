import React, { Component } from 'react';
import Navigator from './components/Navigator'
import './App.scss';
import './App.css';
import logo from './images/logo.svg';
import linkedin from './images/linkedin.png';
import envelope from './images/envelope.png';
import github from './images/github.png';
import LandingPage from './views/LandingPage';

const SVG = () => 
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
      <path d="./images/home-art.svg" fill="#000" />
  </svg>;

class App extends Component {

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="wave" />
          <div className="left-sidebar">
            <img className="logo" src={logo} alt="christopher akanmu logo"/>
            <Navigator />
            <span className="social-icons">
              <img className="envelope icon" src={envelope} alt="envelope"/>
              <img className="github icon" src={github} alt="github"/>
              <img className="linkedin icon" src={linkedin} alt="linkedin"/>
            </span>
          </div>
        
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
