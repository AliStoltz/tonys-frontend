import React, { Component } from 'react';
// import './Landing.css';

class Landing extends Component {

  render() {
    return(
      <div className="landing-container">
      <div className="hero">
          {/* <img src={Guitar3} alt="hero"/> */}
        <div className="welcome">
          <h1>Welcome to CT Crafts</h1>
        </div>
      </div>
     
      {/* <LandingCarousel guitars={this.props.guitars}/> */}
    </div>
    )
  }
};

export default Landing;