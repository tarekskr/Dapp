import React, { Component } from 'react';

import splashAnimation from './animations/splash.gif'

class Splash extends Component {
  render() {
    var splashStyle = {position: 'absolute', left: '50%', top: '50%', width: this.props.width, height: this.props.height, transform: 'translate(-50%, -50%)'};  // center splash in screen
    
    return (
      <div className="Splash" style={splashStyle}>
        <img src={splashAnimation} alt={this.props.alt}/>
      </div>
    );
  }
}

export default Splash;
