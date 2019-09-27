import React, { Component } from 'react';
import './index.scss';
import './index.css';
import landingImg from '../../images/stackback6.svg';
import javaLand from '../../images/java-stack.svg';
import rightArrow from '../../images/right-arrow.svg';
import stackLandingLeft from '../../images/stackLandingLeft.png';
import stackLandingRight from '../../images/stackLandingRight.png';
import stackLandingRightHalf from '../../images/stackLandingRightHalf.png';
import stackLandingLeftHalf from '../../images/stackLandingLeftHalf.png';
import StackNavigator from '../../components/StackNavigator';

class StacksPage extends Component {

  render() {
    return(
      <div className="page-content stack-page">
        <div className="slide">
          <div className="jacket">

            <div className="content landing">
              <img src={stackLandingLeft} alt="" className="stackextra stackextra--left"/>
              <div className="img-box">
                <div className="action-cont">
                  <p className="cont">fullstack</p>
                  <img src={javaLand} alt="" className="cont"/>
                  <p className="cont">javascript</p>
                  <button className="" type="button">
                    my technologies and frameworks
                    <img src={rightArrow} alt="" className="right-arrow"/>
                  </button>
                </div>
                <img src={landingImg} alt="" className="landing-image"/>
              </div>
              <img src={stackLandingRightHalf} alt="" className="stackextra stackextra--right"/>
            </div>

            <div className="content two">
              <img src={stackLandingLeftHalf} alt="" className="stackextra stackextra--left"/>
              <StackNavigator />
              <img src={stackLandingRight} alt="" className="stackextra stackextra--right"/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default StacksPage;
