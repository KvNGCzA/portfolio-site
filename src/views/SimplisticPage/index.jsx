import React, { Component }  from 'react';
import axios from 'axios';
import './index.scss';
import simplisticLogo from '../../images/logo.svg';
import landingImage from '../../images/landing-image.svg';
import tools from '../../images/tools.svg';
import chevronRight from '../../images/chevron-right.svg';
import actions from '../../images/actions.svg';


class SimplisticPage extends Component {
  defaultFormValues = {
    body: '',
    email: '',
    fullname: ''
  };

  state = {
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

  renderHeader = () => {
    return (
      <header className="simplistic-header">
        <div className="simplistic-header--item simplistic-header--item--one">
          <img src={simplisticLogo} alt="logo"/>
        </div>
        <div className="simplistic-header--item simplistic-header--item--two">
          <ul>
            <li className="active">
              <a href="#here">home</a>
              <span className="active--underline-parent">
                <span className="active--underline"></span>
              </span>
            </li>
            <li>
              <a href="#here">my tools</a>
            </li>
            <li>
              <a href="#here">contact</a>
            </li>
          </ul>
        </div>
        <div className="simplistic-header--item simplistic-header--item--three">
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

          <div className="introduction">
            <img src={landingImage} alt="landing"/>
          </div>

          <div className="simplistic-tools">
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

          <div className="simplistic-message">
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
          <p>Christopher Akanmu {new Date().getFullYear()}</p>
        </footer>
      </div>
    )
  }
} 

export default SimplisticPage;
