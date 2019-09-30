import React  from 'react';
import './index.scss';
import './index.css';
import hologram from '../../images/hologram.svg';
import homeart from '../../images/home-art.svg';


const LandingPage = () => 
  <div className="page-content landing-page">
    <div className="partition left">
      <div className="info">
        <h1>Hi,</h1>
        <p>I'm Christopher Akanmu</p>
        <span>
          A Fullstack Software Engineer based in Lagos, Nigeria.<br/>
          I enjoy remote work. Currently employed at <span>Andela</span>.
        </span>
      </div>
      <img src={hologram} alt="" />
    </div>
    <div className="partition right">
    {/* <SVG /> */}
      <img className="homeart" src={homeart} alt="" />
    </div>
  </div>;

export default LandingPage;
