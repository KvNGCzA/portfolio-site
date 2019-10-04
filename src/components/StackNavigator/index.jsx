import React, { Component } from 'react';
import './index.css';
import './index.scss';
import frontendButton from '../../images/frontbtn.svg';
import backendButton from '../../images/backbtn.svg';
import othersButton from '../../images/otherbtn.svg';
import stackHashes from '../../images/stack-hashes.svg';
import reactJs from '../../images/reactjs.svg';
import css3 from '../../images/css3.svg';
import html5 from '../../images/html5.svg';
import sass from '../../images/sass.svg';
import reactNative from '../../images/reactNative.svg';
import webpack from '../../images/webpack.svg';
import bootstrap from '../../images/bootstrap.svg';
import jQuery from '../../images/jQuery.svg';
import padButton from '../../images/pad-button.svg';
import network from '../../images/network.svg';
import battery from '../../images/battery.svg';
import camera from '../../images/camera.svg';
import poddle from '../../images/poddle.svg';
import logoRim from '../../images/logo-rim.svg';
import logoText from '../../images/logo-text.svg';
import chair from '../../images/chair.svg';
import ReactSVG from 'react-svg'

class StackNavigator extends Component {
  state = {
    active: null,
    options: {
      0: 'frontend',
      1: 'backend',
      2: 'others'
    },
    focuses: {
      0: [{
        name: 'HTML5',
        link: html5
      }, {
        name: 'CSS3',
        link: css3
      }, {
        name: 'ReactJs',
        link: reactJs
      }, {
        name: 'Sass',
        link: sass
      }, {
        name: 'React Native',
        link: reactNative
      }, {
        name: 'BootStrap',
        link: bootstrap
      }, {
        name: 'Jquery',
        link: jQuery
      }, {
        name: 'Webpack',
        link: webpack
      }, ],
      1:[],
      2: [],
    },
    selectedFramework: null
  }

  setActive = (active) => this.setState({ active })

  setSelectedFramework = (selectedFramework) => {
    this.setState((prevState) => {
      if (prevState.selectedFramework === selectedFramework) return { selectedFramework: null };
      return { selectedFramework };
    });
  }

  reset = () => {
    const { resetStackPage } = this.props;
    this.setState({ active: null });
  }

  renderStackLanding = ({ active }) => (
    <div className="nav">
      <div className="nav-cont">
        <div className="logo-cont" style={{ position: 'relative' }}>
          <img src={logoRim} alt="logo-cont" className="logo logo-rim"/>
          <img src={logoText} alt="logo-text" className="logo-text"/>
        </div>
        <img src={chair} alt="chair" className="chair"/>
        <div onClick={() => this.setActive(0)} alt="" className={`focus--flicker focuses focuses--${active === 0 ? 'active': 'inactive'}`}>
          <p className="focus--title">Frontend</p>
        </div>
        <div onClick={() => this.setActive(1)} alt="" className={`focus--flicker focus--flicker2 focuses focuses--${active === 1 ? 'active': ''}`}>
          <p className="focus--title">Backend</p>
        </div>
        <div onClick={() => this.setActive(2)} alt="" className={`focus--flicker focus--flicker3 focuses focuses--${active === 2 ? 'active': ''}`}>
          <p className="focus--title">Others</p>
        </div>
        <img src={poddle} alt="poddle" className="poddle"/>
      </div>
    </div>
  );

  renderStacks = ({ focuses, active, selectedFramework  }) => {
    focuses[active].map((({ link, name }, index) => {
      return (
        <li key={name} className={`framework framework--${selectedFramework === null ? 'pristine': (index === selectedFramework ? 'active' : 'inactive')}`} onClick={() => this.setSelectedFramework(index)}
        >
          {/* {name} */}
          <div className="frameworkImage" style={{ backgroundImage: `url(${link})`}}/>
          <p className="framework-name">{name}</p>
        </li>
      );
    }));
  }

  render() {
    const { active, focuses, selectedFramework } = this.state;
    const contStyle = {};
    if ((active === 0 || active) && focuses[active].length < 9) contStyle.alignContent = 'center';
    console.log(this.state, contStyle);
    const body = active === null
      ? this.renderStackLanding({ active })
        : this.renderStacks({ focuses, active, selectedFramework  });
    return(
      <div className="stack-navigation">
        <div className="stackbox" >

          <div className="bezel">
            <img src={camera} alt="ipad-button" className="pad-button pad-button--camera"/>
          </div>

          <div className="technologies">

            {/* ipad icons and symbols */}
            <img src={network}  alt="" className="stack-symbols stack-symbols__network"/>
            <p className="stack-symbols stack-symbols__time">{new Date().toUTCString()}</p>
            <img src={battery}  alt="" className="stack-symbols stack-symbols__battery"/>
            <img src={stackHashes}  alt="" className="stack-symbols stack-symbols__hash"/>
            <div className="stack-symbols stack-symbols__up-cont">
              <div className="button stack-symbols__up-left"/>
              <div className="button stack-symbols__up-right"/>
            </div>
            <div className="stack-symbols stack-symbols__down-cont">
              <div className="button stack-symbols__down-left"/>
              <div className="button stack-symbols__down-right"/>
            </div>
            {/* ipad icons and symbols */}

            {/* <div className="nav">
              <div className="nav-cont">
                <div onClick={() => this.setActive(0)} alt="" className={`focuses focuses--${active === 0 ? 'active': 'inactive'}`}/>
                <div onClick={() => this.setActive(1)} alt="" className={`focuses focuses--${active === 1 ? 'active': ''}`}/>
                <div onClick={() => this.setActive(2)} alt="" className={`focuses focuses--${active === 2 ? 'active': ''}`}/>
              </div>
            </div> */}
              {body}
          </div>

          <div className="title">
            {/* ipad home icon */}
            <img onClick={this.reset} src={padButton} alt="ipad-button" className="pad-button pad-button--home"/>
            {/* ipad home icon */}
            {/* <p>{options[active]}</p> */}
          </div>
        </div>
      </div>
    );
  }
  
}

export default StackNavigator;
