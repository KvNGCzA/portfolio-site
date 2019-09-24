import React, { Component } from 'react';
import './index.scss';
import hologram from '../../images/hologram.svg';
import arrow from '../../images/Arrow.svg';
import homeart from '../../images/home-art.svg';


const LandingPage = () => 
  <div className="page-content landing-page">
    <div className="top">
      <div className="partition left">
        <p className="info">
          <h1>Hi,</h1>
          <p>I'm Christopher Akanmu</p>
          <span>
            A Fullstack Software Engineer based in Lagos, Nigeria.<br/>
            I enjoy remote work. Currently employed at <span>Andela</span>.
          </span>
        </p>
        <img src={hologram} alt="" />
      </div>
      <div className="partition right">
      {/* <SVG /> */}
        <img className="homeart" src={homeart} alt="" />
      </div>
    </div>
    {/* move scroll down to main container */}
    <div className="bottom">
      <p>scroll down</p>
      <div className="down-arrows">
        <img className="scroll-arrow support2" src={arrow} alt=""/>
        <img className="scroll-arrow support" src={arrow} alt=""/>
        <img className="scroll-arrow main" src={arrow} alt=""/>
      </div>
    </div>
  </div>;

export default LandingPage;
