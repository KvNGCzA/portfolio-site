import chevronRight from "../../images/chevron-right.svg";
import React from "react";
import Tool from "./Tool";
import paintbrush from "../../images/paintbrush.png";
import workspace from "../../images/workspace.png";
import tube from "../../images/tube.png";
import packageBox from "../../images/package.png";
import hammerSpanner from "../../images/tools.png";

const { REACT_APP_GITHUB_LINK, REACT_APP_LINKEDIN_LINK } = process.env;

const SOCIALS = [
  {
    link: REACT_APP_GITHUB_LINK,
    text: "github",
  },
  {
    link: REACT_APP_LINKEDIN_LINK,
    text: "linkedin",
  },
];

const TOOLS = [
  {
    title: "Frontend",
    icon: workspace,
    tools: "React, TypeScript, Material UI, Angular, Redux, SCSS/CSS",
  },
  {
    title: "More Frontend",
    icon: paintbrush,
    tools: "RxJs, Angular Material, React Native",
  },
  {
    title: "Backend",
    icon: hammerSpanner,
    tools: "Restful APIs, AWS, ExpressJs, Sequelize, Postgres, DynamoDB",
  },
  {
    title: "Testing",
    icon: tube,
    tools: "React Testing Library, Enzyme, Jest, Cypress",
  },
  {
    title: "Others",
    icon: packageBox,
    tools: "Webpack, GIT, Yarn, NPM, SQL, GraphQL",
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
