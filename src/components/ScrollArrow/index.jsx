import React  from 'react';
import './index.scss';
import './index.css';
import arrow from '../../images/scrollArrow.svg';

export default ({ scrollTo, direction }) =>
  <div className={`${direction}-arrows`} onClick={scrollTo}>
    {/* <p className="scroll-arrow main" style={{ fontSize: 23 }}>scroll</p> */}
    <img className="scroll-arrow main" src={arrow} alt=""/>
  </div>
