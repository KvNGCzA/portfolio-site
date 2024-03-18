import chevronRight from "../../images/chevron-right.svg";
import React from "react";
import Tool from "./Tool";
import paintbrush from "../../images/paintbrush.png";
import workspace from "../../images/workspace.png";
import tube from "../../images/tube.png";
import packageBox from "../../images/package.png";
import hammerSpanner from "../../images/tools.png";

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

const TOOLS = [
  {
    title: "Frontend",
    icon: workspace,
    tools: "React, TypeScript, Material UI, Redux, SCSS/CSS",
  },
  {
    title: "More Frontend",
    icon: paintbrush,
    tools: "Angular, RxJs, Angular Material, React Native, Webpack",
  },
  {
    title: "Testing",
    icon: tube,
    tools: "Enzyme, Mocha/Chai, Jest, Jasmine, Karma, Cypress, TestCafe",
  },
  {
    title: "Backend",
    icon: hammerSpanner,
    tools: "Amazon Web Services, NodeJS/Express, Sequelize",
  },
  {
    title: "Others",
    icon: packageBox,
    tools: "PostgreSQL, DynamoDB (AWS), SQL, GraphQL, yarn, NPM",
  },
];

const SectionTwo = () => {
  return (
    <div className="simplistic-tools">
      <div className="simplistic-tools--parent">
        <div className="simplistic-tools--parent-grid">
          {TOOLS.map((tool) => (
            <Tool key={tool.title} {...tool} />
          ))}
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
