import React, { Component } from 'react';
import LeftSideBar from './components/LeftSideBar';
import LandingPage from './views/LandingPage';
import ScrollArrow from './components/ScrollArrow';
import './App.scss';
import './App.css';
import StacksPage from './views/StacksPage';

class App extends Component {
  state = {
    currentPage: 0,
    options: [{
      text: 'welcome'
    }, {
      text: 'my stack'
    }, {
      text: 'contact'
    }],
    positions: {},
  }

  componentDidMount() {
    const { options } = this.state;
    const windowHeight = window.innerHeight;
    const positions = {};
    options.forEach((option, index) => {
      const arr = [
        windowHeight * index,
        (windowHeight * (index + 1)) - 1
      ];
      positions[index] = arr;
    });
    this.setState(
      { positions },
      window.addEventListener('scroll', this.autoScroll)
    );
  }

  autoScroll = () => {
    const { currentPage } = this.state;
    const windowHeight = window.innerHeight;
    const top = Math.abs((document.body.getBoundingClientRect()).top);
    console.log(top);
    if (top < windowHeight && currentPage === 1) {
      console.log('scroll to page 1');
      // scroll to page 1
      this.setCurrentPage(0);
    } else if (
      (top > 0 && top < windowHeight)
      || (top < windowHeight * 2 && currentPage === 2)
    ) {
      console.log('scroll to page 2');
      // scroll to page 2
      this.setCurrentPage(1);
    } else {
      console.log('scroll to page 3');
      // scroll to page 3
      this.setCurrentPage(2);
    }
  }

  setCurrentPage = (value) => {
    console.log('value', value);
    window.removeEventListener('scroll', this.autoScroll);
    const windowHeight = window.innerHeight;
    const scrollTo = value * windowHeight;
    console.log('value', value, 'scrollTo', scrollTo);
    window.scrollTo({
      top: scrollTo,
      left: 0,
      behavior: 'smooth'
    });
    this.setState({ currentPage: value });
    setTimeout(() => {
      window.addEventListener('scroll', this.autoScroll);
    }, 1000);
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
          <StacksPage />
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
