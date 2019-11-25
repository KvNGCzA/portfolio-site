import React, { Component }  from 'react';
import './index.scss';
import ReactSVG from 'react-svg';
import simplisticLogo from '../../images/simplistic-logo.svg'


class SimplisticPage extends Component {

  renderHeader = () => {
    return (
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
    );
  }


  render() {
    return (
      <div className="simplistic-page">
        {this.renderHeader()}
        <div className="simplistic-body">
          <div className="introduction">
            <div>
              <h1 className="simplistic-skills">Fullstack engineer + Designer</h1>
              <h1>christopher</h1>
              <h1>akanmu</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default SimplisticPage;
