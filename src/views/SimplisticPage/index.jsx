import React  from 'react';
import './index.scss';
import ReactSVG from 'react-svg';
import simplisticLogo from '../../images/simplistic-logo.svg'

const SimplisticPage = () => 
  <div className="simplistic-page">
    <div className="simplistic-header">
        <img src={simplisticLogo} alt="logo"/>
        <ul>
          <li className="active">
            <a href="#here">home</a>
            <span className="active--underline-parent">
              <span className="active--underline"></span>
            </span>
          </li>
          <li>
            <a href="#here">my tools</a>
          </li>
          <li>
            <a href="#here">contact</a>
          </li>
        </ul>
        <a className="download-resume" href="https://download.com">
          <span>download my resume</span>
          <span>download my resume</span>
        </a>
    </div>
  </div>

export default SimplisticPage;
