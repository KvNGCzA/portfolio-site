import React, { Component } from 'react';
import './index.scss';

export default class Navigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const el1 = document.getElementsByClassName('page-content');
    const bounding1 = Math.abs(el1[0].getBoundingClientRect().top);
    const bounding2 = Math.abs(el1[1].getBoundingClientRect().top);
    const bounding3 = Math.abs(el1[2].getBoundingClientRect().top);
    console.log(el1.length, bounding1, bounding2, bounding3)
  }

  render() {
    const { setCurrentPage, currentPage, options } = this.props;
    console.log(this.state);
    return (
      <div className="navigator">
        {options.map((option, index) => {
          const status = index <= currentPage ? 'active' : 'inactive';
          return (
            <div className="nav-cont" key={option.text}>
              <div className={`${index === 0 ? '' : 'vl'} vl--${status}`} />
              <button
                onClick={() => setCurrentPage(index)}
                className={`nav-halo nav-halo--${index === currentPage ? 'active' : 'inactive'}`}
              >
                <p className={`nav-item nav-item--${status}`}>
                  {index + 1}
                  <span className={`text text--${status}`}>{option.text}</span>
                </p>
              </button>
              <div className={`${index === options.length - 1 ? '' : 'vl'} vl--${status}`} />
            </div>
          );
        })}
      </div>
    );
  }
};


