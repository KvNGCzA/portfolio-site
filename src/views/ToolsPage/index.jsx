import React, { Component, Fragment } from 'react';
import './index.scss';
import './index.css';
import backendtext from '../../images/backendtext.svg';
import frontendtext from '../../images/frontendtext.svg';
import otherstext from '../../images/otherstext.svg';
import greenshuttle from '../../images/greenshuttle.svg';
import whiteshuttle from '../../images/whiteshuttle.svg';

class ToolsPage extends Component {

  state = {
    frontend: [{
      name: 'Languages/Frameworks',
      tools: 'HTML, CSS, SCSS, ReactJs, React Native, Redux, Bootstrap, JQuery'
    }, {
      name: 'Design Tools',
      tools: 'Figma, Photoshop'
    }, {
      name: 'module bundler',
      tools: 'Webpack'
    }, {
      name: 'Testing',
      tools: 'Jest, mocha, chai, cypress'
    }],
    backend: [{
      name: 'languages/frameworks',
      tools: 'NodeJs, Express'
    }, {
      name: 'database',
      tools: 'PostgreSQL'
    }, {
      name: 'ORM',
      tools: 'Sequelize'
    }, {
      name: 'testing',
      tools: 'Jest, mocha, chai, Supertest'
    }, {
      name: 'noteworthy',
      tools: 'Socket.IO, Bull Jobs'
    }],
    others: [{
      name: 'package manager',
      tools: 'Yarn, NPM'
    }, {
      name: 'devOps, CI/CD',
      tools: 'Heroku, Travis, CodeClimate, HoundCI, Coveralls'
    }, {
      name: 'code editors',
      tools: 'VsCode, XCode, Atom'
    }, {
      name: 'Project management tool',
      tools: 'Pivotal Tracker, Trello, Jira'
    }, {
      name: 'version control',
      tools: 'Git'
    }, {
      name: 'linting & Convention',
      tools: 'ESLint, AirBnB Style Guide, BEM convention'
    }, {
      name: 'Noteworthy',
      tools: 'Wordpress, FTP, PHP, ES6, Css Animations'
    }]
  }

  renderTools = (focus) => (
    <div className="tool">
      {focus.map((tool) => (
        <Fragment>
          <p className="tool-name">{tool.name}</p>
          <p className="tool-tools">{tool.tools}</p>
        </Fragment>
      ))}
    </div>
  )

  render() {
    const { frontend, others, backend } = this.state;
    return(
      <div className="page-content tools-page">
        <img src={greenshuttle} alt="greenshuttle" className="shuttle greenshuttle" />
        <img src={whiteshuttle} alt="whiteshuttle" className="shuttle whiteshuttle" />
        <div className="tools-cont">
          <div className="tool-focus">
            <img className="tool-image" src={frontendtext} alt="backend button christopher akanmu"/>
            {this.renderTools(frontend)}
          </div>
          <div className="tool-focus">
            <img className="tool-image" src={backendtext} alt="backend button christopher akanmu"/>
            {this.renderTools(backend)}
          </div>
          <div className="tool-focus">
            <img className="tool-image" src={otherstext} alt="backend button christopher akanmu"/>
            {this.renderTools(others)}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolsPage;
