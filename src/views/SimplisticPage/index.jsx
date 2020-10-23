import React, { Component }  from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet'
import './index.scss';
import '../../App.scss';
import logo from '../../images/logo.png';
import simplisticLogo from '../../images/logo.svg';
import landingImage from '../../images/landing-image.svg';
import tools from '../../images/tools.svg';
import toolsMobile from '../../images/tools-mobile.svg';
import chevronRight from '../../images/chevron-right.svg';
import actions from '../../images/actions.svg';
import description from '../../images/description.svg';
import checkCircle from '../../images/checkCircle.svg';

const {
  REACT_APP_FORMSPREE, REACT_APP_PROJECTS_LINK,
  REACT_APP_DRIBBBLE_LINK, REACT_APP_GITHUB_LINK,
  REACT_APP_LINKEDIN_LINK
} = process.env;

class SimplisticPage extends Component {
  defaultFormValues = {
    body: '',
    email: '',
    fullname: ''
  };

  state = {
    currentPage: 0,
    socials: [
      {
        link: REACT_APP_PROJECTS_LINK,
        text: 'my projects'
      }, {
        link: REACT_APP_DRIBBBLE_LINK,
        text: 'my dribbble'
      }, {
        link: REACT_APP_GITHUB_LINK,
        text: 'my github'
      }, {
        link: REACT_APP_LINKEDIN_LINK,
        text: 'my linkedin'
      },
    ],
    menuback: '',
    formValues: { ...this.defaultFormValues },
    right: -210,
    sendingMessage: false,
    seo: {
      title: "Christopher Akanmu - Software Engineer + UI/UX Designer",
      description: "Christopher Akanmu is a world-class Cloud Solutions Architect at Trilogy, Ex-Fullstack Software Engineer at Andela, Ex-Quality Assurance Engineer at ProdPerfect and UI/UX Designer from Lagos, Nigeria.",
      url: "https://www.christopherakanmu.com/",
      image: logo
    },
    landingImageLeft: '-100%',
    landingImageOpacity: 0
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, false);
    this.setAnimations();
  }

  setAnimations = () => {
    setTimeout(() => {
      this.setState({ landingImageLeft: 0, landingImageOpacity: 1 });
    }, 2000);
  }

  renderSEO = () =>
    <Helmet
      title={this.state.seo.title}
      meta={[
        {
          name: "description",
          property: "og:description",
          content: this.state.seo.description
        },
        { property: "og:title", content: this.state.seo.title },
        { property: "og:url", content: this.state.seo.url },
        { property: "og:image", content: this.state.seo.image },
        { property: "og:image:type", content: "image/png" },
        { property: "twitter:image:src", content: this.state.seo.image },
        { property: "twitter:title", content: this.state.seo.title },
        { property: "twitter:description", content: this.state.seo.description }
      ]}
    />

  onScroll = () => {
    const { currentPage, menuback } = this.state;
    const height = window.innerHeight;
    const top = window.pageYOffset;
    if (top > 270 && !menuback) {
      this.setState({ menuback: 'rgba(63, 61, 86, 0.8)' })
    } else if (top < 270 && menuback) {
      this.setState({ menuback: '' })
    }

    if (
      top > (0.8 * height)
      && top < ((0.8 * height) * 2)
      && currentPage !== 1
    ) {
      this.setState({ currentPage: 1 });
    } else if (
      top > (0.8 * (height * 2))
      && currentPage !== 2
    ) {
      this.setState({ currentPage: 2 });
    } else if (top < (0.8 * height) && currentPage !== 0) {
      this.setState({ currentPage: 0 });
    }
  }

  selectPage = (currentPage) => {
    document.removeEventListener('scroll', this.onScroll);
    const height = window.innerHeight;
    const top = currentPage * height;
    window.scrollTo({
      top,
      behavior: 'smooth'
    });
    this.setState({ currentPage });
    setTimeout(() => document.addEventListener('scroll', this.onScroll, false), 1000);
  }

  renderHeader = () => {
    const { currentPage } = this.state;
    return (
      <header className="simplistic-header">
        <div className="simplistic-header--item simplistic-header--item--one">
          <img src={simplisticLogo} alt="logo"/>
        </div>
        <div className="simplistic-header--item simplistic-header--item--two">
          <ul style={{
            backgroundColor: this.state.menuback
          }}>
            <li className={currentPage === 0 ? 'active' : ''}>
              <a href="#homepage" onClick={() => this.selectPage(0)}>home</a>
              {currentPage === 0 ? <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span> : null}
            </li>
            <li className={currentPage === 1 ? 'active' : ''}>
              <a href="#tools" onClick={() => this.selectPage(1)}>my tools</a>
              {currentPage === 1 ? <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span> : null}
            </li>
            <li className={currentPage === 2 ? 'active' : ''}>
              <a href="#message" onClick={() => this.selectPage(2)}>contact</a>
              {currentPage === 2 ? <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span> : null}
            </li>
          </ul>
        </div>
      </header>
    );
  }

  toggleNotification = () => {
    this.setState(() => ({ right: 0 }), () => setTimeout(() => {
      this.setState({ right: -210 })
    }, 3000));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ sendingMessage: true });
    try {
      await axios.post(
        REACT_APP_FORMSPREE,
        this.state.formValues
      );
      this.setState((prevState) => ({
        ...prevState,
        formValues: { ...this.defaultFormValues },
        sendingMessage: false
      }));
      this.toggleNotification();
    } catch (err) {
      console.log(err.response);
    }
  }

  onChangeValue = (key, e) => {
    e.persist()
    this.setState((prevState) => ({
      ...prevState,
      formValues: { ...prevState.formValues, [key]: e.target.value }
    }))
  }

  renderSectionOne = () => {
    return(
      <div className="introduction">
        <img className="introduction--image-main" style={{
            left: this.state.landingImageLeft,
            opacity: this.state.landingImageOpacity
          }} src={landingImage} alt="landing christopher akanmu portfolio"
        />
        <img className="introduction--image-mobile"
          style={{
            left: this.state.landingImageLeft,
            opacity: this.state.landingImageOpacity
          }}
          src={description} alt="landing christopher akanmu portfolio"
        />
      </div>
    );
  }

  renderSectionTwo = () => {
    const { socials } = this.state;
    return(
      <div className="simplistic-tools">
        <div className="simplistic-tools--parent">
          <div className="simplistic-tools--image-parent">
            <img className="simplistic-tools--image-main" src={tools} alt="tools"/>
            <img className="simplistic-tools--image-mobile" src={toolsMobile} alt="tools"/>
          </div>
          <div className="simplistic-tools--buttons">
            {
              socials.map((social) => {
                return (
                  <a href={social.link} key={social.text} target="_blank" rel="noopener noreferrer">
                    {social.text}
                    <img src={chevronRight} alt="chevron-right"/>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }

  renderSectionThree = () => {
    const { formValues: { body, email, fullname } } = this.state;
    return(
      <div className="simplistic-message">

        <p className="simplistic-message--title">
          send me a message
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="simplistic-form">
            <div className="simplistic-form--header">
              <img src={actions} alt="window actions" />
            </div>
            <div className="simplistic-form--text-area">
              <textarea
                value={body}
                placeholder="Tell me what I can do for you :)..."
                onChange={(e) => this.onChangeValue('body', e)}
                required
              />
            </div>
            <div className="simplistic-form--footer">
              <div className="simplistic-form--footer--form">
                <div className="input-parent">
                  <input
                    value={email}
                    placeholder="enter your email"
                    type="email"
                    onChange={(e) => this.onChangeValue('email', e)}
                    required
                  />
                  <input
                    value={fullname}
                    placeholder="enter your fullname"
                    required
                    onChange={(e) => this.onChangeValue('fullname', e)}
                  />
                </div>
                <button type="submit" className={this.state.sendingMessage ? 'disabled' : ''} disabled={this.state.sendingMessage}>
                  send
                  <img src={chevronRight} alt="chevron-right"/>
                </button>
              </div>
            </div>
          </div>
        </form>
        <footer>
          <p>&copy; Christopher Akanmu {new Date().getFullYear()}</p>
        </footer>
      </div>   
    );
  }

  render() {
    return (
      <div className="simplistic-page">
        {this.renderSEO()}
        {this.renderHeader()}
        <div className="simplistic-body">
          {this.renderSectionOne()}
          {this.renderSectionTwo()}
          {this.renderSectionThree()}
        </div>

        <div className="notification" style={{ right: this.state.right }}>
          <div className="edge" />
          <div className="content">
            <p>message sent</p>
            <img src={checkCircle} alt="check mark"/>
          </div>
        </div>
      </div>
    )
  }
} 

export default SimplisticPage;
