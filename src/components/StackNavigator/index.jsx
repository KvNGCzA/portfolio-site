import React, { Component } from 'react';
import frontendButton from '../../images/frontend-button.svg';
import backendButton from '../../images/backend-button.svg';
import othersButton from '../../images/others-button.svg';

class StackNavigator extends Component {
  state = {
    active: 0
  }

  setActive = (active) => this.setState({ active })
  render() {
    return(
      <div className="stack-navigation">
        <img src={frontendButton} onClick={() => this.setActive(0)} alt="" className={this.state.active === 0 ? 'active': ''}/>
        <img src={backendButton} onClick={() => this.setActive(1)} alt="" className={this.state.active === 1 ? 'active': ''}/>
        <img src={othersButton} onClick={() => this.setActive(2)} alt="" className={this.state.active === 2 ? 'active': ''}/>
      </div>
    );
  }
  
}

export default StackNavigator;
