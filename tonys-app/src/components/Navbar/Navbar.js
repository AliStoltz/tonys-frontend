import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


class NavBar extends React.Component {
  state = {
    loginModalOpen: false,
    signupModalOpen: false,
  };

  handleLoginModalOpen = () => {
    console.log('login clicked')
    this.setState((prevState) => {
      return {
        loginModalOpen: !prevState.loginModalOpen
      }
    });
  };

  handleSignupModalOpen = () => {
    console.log('signup clicked')
    this.setState((prevState) => {
      return {
        signupModalOpen: !prevState.signupModalOpen
      }
    });
  };

  

  render() {
    return (
      
    )
  }
}