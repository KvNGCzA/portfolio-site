import React from 'react';
import Navigator from '../Navigator'
import SocialIcons from '../SocialIcons';
import logo from '../../images/logo.svg';

export default ({ options, currentPage, setCurrentPage }) =>
  <div className="left-sidebar">
    <img className="logo" src={logo} alt="christopher akanmu logo"/>
    <Navigator options={options} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    <SocialIcons />
  </div>
