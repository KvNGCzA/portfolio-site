import React, { Component }  from 'react';
import axios from 'axios';
import './index.scss';
import simplisticLogo from '../../images/logo.svg';
import landingImage from '../../images/landing-image.svg';
import tools from '../../images/tools.svg';
import chevronRight from '../../images/chevron-right.svg';
import actions from '../../images/actions.svg';
import description from '../../images/description.svg';


class SimplisticPage extends Component {
  defaultFormValues = {
    body: '',
    email: '',
    fullname: '',
    menuback: ''
  };

  state = {
    currentPage: 0,
    socials: [
      {
        link: 'https://docs.google.com/presentation/d/1dxTE0rnvi7HQz5pkEp526ELH0GBFn_zK0Rq4s_BkgEI/edit?usp=sharing',
        text: 'my projects'
      }, {
        link: 'https://dribbble.com/KvNG_CzA',
        text: 'my dribbble'
      }, {
        link: 'https://github.com/kvngcza',
        text: 'my github'
      }, {
        link: 'https://www.linkedin.com/in/christopher-oluwadamilare-akanmu-1b9438153/',
        text: 'my linkedin'
      },
    ],
    formValues: { ...this.defaultFormValues }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const { currentPage, menuback } = this.state;
    const height = window.innerHeight;
    const top = window.pageYOffset;
    if (top > 270 && !menuback) {
      this.setState({ menuback: 'rgba(63, 61, 86, 0.5)' })
    } else if (top < 270 && menuback) {
      this.setState({ menuback: '' })
    }

    if (
      top > (0.8 * height)
      && top < ((0.8 * height) * 2)
      && currentPage !== 1
    ) {
      this.selectPage(1);
    } else if (
      top > (0.8 * (height * 2))
      && currentPage !== 2
    ) {
      this.selectPage(2);
    } else if (top < (0.8 * height) && currentPage !== 0) {
      this.selectPage(0);
    }
  }

  selectPage = (currentPage) => {
    this.setState({ currentPage });
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

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        process.env.REACT_APP_FORMSPREE,
        this.state.formValues
      );
      this.setState((prevState) => ({
        ...prevState,
        formValues: { ...this.defaultFormValues }
      }))
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

  render() {
    const { socials, formValues: { body, email, fullname } } = this.state;
    return (
      <div className="simplistic-page">
        {this.renderHeader()}
        
        <div className="simplistic-body">

          <div id="homepage" className="introduction">
            <img src={landingImage} alt="landing"/>
          </div>

          <div id="tools" className="simplistic-tools">
            <div className="simplistic-tools--parent">
              <img src={tools} alt="tools"/>
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

          <div id="message" className="simplistic-message">
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
                  />
                </div>
                <div className="simplistic-form--footer">
                  <div className="simplistic-form--footer--form">
                    <div>
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
                    <button type="submit">
                      send
                      <img src={chevronRight} alt="chevron-right"/>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>   
        </div>
        <footer>
          <p>&copy; Christopher Akanmu {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
} 

export default SimplisticPage;
