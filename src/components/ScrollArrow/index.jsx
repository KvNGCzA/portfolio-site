import React  from 'react';
import './index.scss';
import arrow from '../../images/Arrow.svg';

export default ({ scrollTo, direction }) =>
  <div className={`${direction}-arrows`} onClick={scrollTo}>
    {/* <p className="scroll-arrow main">scroll down</p> */}
    <img className="scroll-arrow support2" src={arrow} alt=""/>
    <img className="scroll-arrow support" src={arrow} alt=""/>
    <img className="scroll-arrow main" src={arrow} alt=""/>
  </div>
