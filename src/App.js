import React, { Component } from 'react';
import LeftSideBar from './components/LeftSideBar';
import LandingPage from './views/LandingPage';
import ScrollArrow from './components/ScrollArrow';
import './App.scss';
import ToolsPage from './views/ToolsPage';
import ResumePage from './views/ResumePage';

class App extends Component {
  state = {
    currentPage: 0,
    options: [{
      text: 'welcome'
    }, {
      text: 'my tools'
    }, {
      text: 'about me'
    }],
  }

  componentDidMount() {
    const target = document.getElementsByClassName('container')[0];
    target.addEventListener('scroll', this.autoScroll);
  }

  runCords = () => {
    const { currentPage } = this.state;
    const el1 = document.getElementsByClassName('page-content');
    var bounding1 = el1[0].getBoundingClientRect();
    var bounding2 = el1[1].getBoundingClientRect();
    var bounding3 = el1[2].getBoundingClientRect();
    console.log(currentPage, bounding1, bounding2, bounding3);
  }

  autoScroll = () => {
    const { currentPage } = this.state;
    const eventTarget = document.getElementsByClassName('container')[0];
    const height = window.innerHeight;
    const top = Math.abs((document.getElementsByClassName('landing-page')[0].getBoundingClientRect()).top);
    let run = false;
    const limit = height/2;
    if (
        top < height - limit
        && top < height
        && currentPage !== 0
      ) {
      eventTarget.removeEventListener('scroll', this.autoScroll);
      // this.resetStackPage(500);
      this.setState({ currentPage: 0 });
      run = true;
    } else if (
      (top > limit && top < (height * 2))
      && currentPage !== 1
    ) {
      eventTarget.removeEventListener('scroll', this.autoScroll);
      this.setState({ currentPage: 1 });
      run = true;
    } else if (
      top > height + limit
      && top < (height * 2)
      && currentPage !== 2
    ) {
      eventTarget.removeEventListener('scroll', this.autoScroll);
      // this.resetStackPage(500);
      this.setState({ currentPage: 2 });
      run = true;
    }  if (run) {
      setTimeout(() => {
        eventTarget.addEventListener('scroll', this.autoScroll);
      }, height < 800 ? 300 : 880);
    }
  }

  resetStackPage = (time) => {
    const target = document.getElementsByClassName('slide')[0];
    setTimeout(() => {
      target.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }, time || 0);
  }

  setCurrentPage = (value) => {
    // if (value !== 1) this.resetStackPage();
    const eventTarget = document.getElementsByClassName('container')[0];
    eventTarget.removeEventListener('scroll', this.autoScroll);
    const target = document.getElementsByClassName('container')[0];
    const windowHeight = window.innerHeight;
    const scrollTo = value * windowHeight;
    target.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth'
    });
    this.setState({ currentPage: value });
    setTimeout(() => {
      eventTarget.addEventListener('scroll', this.autoScroll);
    }, 1005);
  }

  secondStackPage = () => {
    const target = document.getElementsByClassName('slide')[0];
    target.scrollTo({
      left: window.innerWidth,
      behavior: 'smooth'
    });
  }

  scrollTo = (direction) => {
    const { currentPage, options } = this.state;
    let scrollTo;
    if (direction === 'down' && currentPage + 1 < options.length) scrollTo = currentPage + 1;
    if (direction !== 'down' && currentPage - 1 >= 0) scrollTo = currentPage - 1;
    scrollTo = scrollTo ? scrollTo : 0;
    this.setCurrentPage(scrollTo);
  }

  render() {
    const { currentPage, options } = this.state;

    const upArrow = currentPage > 0
      ? <ScrollArrow
          direction="up"
          scrollTo={() => this.scrollTo('up')}
        /> : null;
    const downArrow = currentPage < options.length - 1
      ? <ScrollArrow
          direction="down"
          scrollTo={() => this.scrollTo('down')}
        /> : null;

    return (
      <div className="main-container">
        <div className="container">
          <div className="wave" />
          <LeftSideBar
            options={options}
            currentPage={currentPage}
            setCurrentPage={this.setCurrentPage}
          />
          {upArrow}
          {downArrow}
          <LandingPage />
          <ToolsPage />
          <ResumePage />
        </div>
      </div>
    );
  }
}

export default App;
