import simplisticLogo from "../../images/logo.svg";
import React from "react";

const Header = ({ menuBack, currentPage, selectPage }) => {
  return (
    <header className="simplistic-header">
      <div className="simplistic-header--item simplistic-header--item--one">
        <img src={simplisticLogo} alt="logo" />
      </div>
      <div className="simplistic-header--item simplistic-header--item--two">
        <ul
          style={{
            backgroundColor: menuBack,
          }}
        >
          <li className={currentPage === 0 ? "active" : ""}>
            <button href="#" onClick={() => selectPage(0)}>
              home
            </button>
            {currentPage === 0 ? (
              <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span>
            ) : null}
          </li>
          <li className={currentPage === 1 ? "active" : ""}>
            <button href="#" onClick={() => selectPage(1)}>
              my tools
            </button>
            {currentPage === 1 ? (
              <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span>
            ) : null}
          </li>
          <li className={currentPage === 2 ? "active" : ""}>
            <button href="#" onClick={() => selectPage(2)}>
              contact
            </button>
            {currentPage === 2 ? (
              <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span>
            ) : null}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
