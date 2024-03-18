import tools from "../../images/tools.svg";
import toolsMobile from "../../images/tools-mobile.svg";
import chevronRight from "../../images/chevron-right.svg";
import React from "react";

const {
  REACT_APP_PROJECTS_LINK,
  REACT_APP_DRIBBBLE_LINK,
  REACT_APP_GITHUB_LINK,
  REACT_APP_LINKEDIN_LINK,
} = process.env;

const SOCIALS = [
  {
    link: REACT_APP_PROJECTS_LINK,
    text: "my projects",
  },
  {
    link: REACT_APP_DRIBBBLE_LINK,
    text: "my dribbble",
  },
  {
    link: REACT_APP_GITHUB_LINK,
    text: "my github",
  },
  {
    link: REACT_APP_LINKEDIN_LINK,
    text: "my linkedin",
  },
];

const SectionTwo = () => {
  return (
    <div className="simplistic-tools">
      <div className="simplistic-tools--parent">
        <div className="simplistic-tools--image-parent">
          <img
            className="simplistic-tools--image-main"
            src={tools}
            alt="tools"
          />
          <img
            className="simplistic-tools--image-mobile"
            src={toolsMobile}
            alt="tools"
          />
        </div>
        <div className="simplistic-tools--buttons">
          {SOCIALS.map((social) => {
            return (
              <a
                href={social.link}
                key={social.text}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.text}
                <img src={chevronRight} alt="chevron-right" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
