import React,  { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Routes from './config/Routes';

import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`,
    { withCredentials: true })
    .then(res => {
      localStorage.removeItem('uid');
      this.setState({ currentUser: null });
      this.props.history.push('/');
      // this.state.cart = 0;
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Routes 
        currentUser={this.state.currentUser}
        setCurrentUser={this.setCurrentUser}
        />
      </div>
    );
  }
}

export default withRouter(App);