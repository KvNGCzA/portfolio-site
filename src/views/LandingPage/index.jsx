import React  from 'react';
import './index.scss';
import './index.css';
import hologram from '../../images/hologram.svg';
import homeart from '../../images/home-art.svg';
import ReactSVG from 'react-svg';


const LandingPage = () => 
  <div className="page-content landing-page">
    <div className="partition left">
      <div className="info">
        <h1>Hi,</h1>
        <p>I'm Chris</p>
        <span>
          A Fullstack Software Engineer based in Lagos, Nigeria.<br/>
          I enjoy remote work. Currently employed at <span>Andela</span>.
        </span>
      </div>
      <ReactSVG src={hologram} alt="" className="hologram"/>
    </div>
    <div className="partition right">
    {/* <SVG /> */}
      <ReactSVG className="homeart" src={homeart} alt="" />
    </div>
  </div>;

export default LandingPage;
