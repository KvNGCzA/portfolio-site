import React from 'react';
import './index.scss';

export default ({ setCurrentPage, currentPage, options }) => (
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


