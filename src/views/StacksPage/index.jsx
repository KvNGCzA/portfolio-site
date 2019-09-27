import React, { Component } from 'react';
import './index.scss';
import './index.css';
import landingImg from '../../images/stackback6.svg';
import javaLand from '../../images/java-stack.svg';
import rightArrow from '../../images/right-arrow.svg';

class StacksPage extends Component {

  render() {
    return(
      <div className="page-content stack-page">
        <div className="slide">
          <div className="jacket">
            <div className="content landing">
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
              {/* <div className="background-image back" /> */}
              {/* <div className="background-image front" /> */}
            </div>
            <div className="content two">

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StacksPage;
