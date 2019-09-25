import React  from 'react';
import './index.scss';
import arrow from '../../images/Arrow.svg';

const ScrollDownArrow = () =>
  <div className="down-arrows">
    {/* <p className="scroll-arrow main">scroll down</p> */}
    <img className="scroll-arrow support2" src={arrow} alt=""/>
    <img className="scroll-arrow support" src={arrow} alt=""/>
    <img className="scroll-arrow main" src={arrow} alt=""/>
  </div>

export default ScrollDownArrow;
