import simplisticLogo from "../../images/logo.svg";
import React from "react";

const MENU_OPTIONS = ["home", "tools", "contact"];

const Header = ({
  menuBack,
  currentPage,
  selectPage,
}: {
  menuBack: string;
  currentPage: number;
  selectPage: (page: number) => void;
}) => {
  return (
    <header className="simplistic-header">
      <div className="simplistic-header--item simplistic-header--item--one">
        <img src={simplisticLogo} alt="logo" />
      </div>
      <div className="simplistic-header--item simplistic-header--item--two">
        <ul style={{ backgroundColor: menuBack }}>
          {MENU_OPTIONS.map((option, index) => (
            <li className={currentPage === index ? "active" : ""} key={option}>
              <button onClick={() => selectPage(index)}>{option}</button>
              {currentPage === index ? (
                <span className="active--underline-parent">
                  <span className="active--underline"></span>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
