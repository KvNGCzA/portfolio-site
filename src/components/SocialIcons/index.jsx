import React from 'react';
import linkedin from '../../images/linkedin.svg';
import envelope from '../../images/envelope.svg';
import github from '../../images/github.svg';
import './index.scss';

const SocialIcons = () =>
  <span className="social-icons">
    <img className="envelope icon" src={envelope} alt="envelope"/>
    <img className="github icon" src={github} alt="github"/>
    <img className="linkedin icon" src={linkedin} alt="linkedin"/>
  </span>

export default SocialIcons;
