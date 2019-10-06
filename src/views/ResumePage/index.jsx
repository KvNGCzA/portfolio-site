import React from 'react';
import './index.scss';
import './index.css';
import aboutme from '../../images/aboutme.svg';
import spaceship from '../../images/spaceship.svg';

const ResumePage = () => (
  <div className="page-content resume-page">
    <div className="about-me">
      <img className="aboutme-text" src={aboutme} alt=""/>
      <img className="spaceship" src={spaceship} alt="" />
    </div>
  </div>
);

export default ResumePage;
