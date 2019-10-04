import React  from 'react';
import './index.scss';
import './index.css';
import excerpt from '../../images/excerpt.svg';
import mainshuttle from '../../images/mainshuttle.svg';
import poddle from '../../images/poddle.svg';
import ReactSVG from 'react-svg';


const LandingPage = () => 
  <div className="page-content landing-page">
    <div className="partition ">
      <img src={excerpt} alt="excerpt" className="excerpt"/>
      <img src={mainshuttle} alt="mainshuttle" className="mainshuttle"/>
      {/* <img src={poddle} alt="poddle" className="poddle"/> */}
    </div>
  </div>;

export default LandingPage;
