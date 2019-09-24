import React, { Component } from 'react';
import './index.scss';

class Navigator extends Component {

  state = {
    activeIndex: 0,
    options: [{
      link: '#',
      text: 'welcome'
    }, {
      link: '#',
      text: 'my stack'
    }, {
      link: '#',
      text: 'contact'
    }]
  }

  setActive = (activeIndex) => {
    this.setState({ activeIndex })
  }

  render() {
    const { options, activeIndex } = this.state;
    return(
      <div className="navigator">
        {options.map((option, index) => {
          const status = index <= activeIndex ? 'active' : 'inactive';
          return (
            <div className="nav-cont" key={option.text}>
              <div className={`${index === 0 ? '' : 'vl'} vl--${status}`} />
              <a
                href="#top"
                onClick={() => this.setActive(index)}
                className={`nav-halo nav-halo--${index === activeIndex ? 'active' : 'inactive'}`}
              >
                <p className={`nav-item nav-item--${status}`}>
                  {index + 1}
                  <span className={`text text--${status}`}>{option.text}</span>
                </p>
              </a>
              <div className={`${index === options.length - 1 ? '' : 'vl'} vl--${status}`} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Navigator;
