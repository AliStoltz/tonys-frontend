import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Login from '../Auth/Login';
import Signup from '../Auth/Signup';

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
      <>
      <nav className="navbar navbar-expand-md ">
        <Link className="navbar-brand" to="/">
        <span>GuitarHub</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto">
          {!this.props.currentUser ?
          <>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link" onClick={this.handleLoginModalOpen}>Log in<span className="sr-only">(current)</span></button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link nav-link" onClick={this.handleSignupModalOpen}>Sign up</button>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link nav-link" onClick={this.handleBuyRedirect}>Shop Guitars</button>
            </li>
            </> : <>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-light nav-link nav-link" onClick={this.handleBuyRedirect}>Shop Guitars</button>
            </li>
            <li className="nav-item">
              <span className="btn btn-outline-light nav-link nav-link" onClick={this.handleSellRedirect}>My Guitars</span>
            </li>
            <li className="nav-item">
              <span className="btn btn-outline-light nav-link nav-link" onClick={this.props.logout}>Logout</span>
            </li>
            <Link to={'/cart'}>
              <li className="nav-item">
                <span id="cart"><i class="fa fa-shopping-cart"></i>{this.props.cart}</span>
              </li>
            </Link>
            </>
          }
          </ul>
        </div>
      </nav>
      <Login 
      loginModalOpen={this.state.loginModalOpen}
      handleLoginModalOpen={this.handleLoginModalOpen}
      setCurrentUser={this.props.setCurrentUser} />
      <Signup 
      signupModalOpen={this.state.signupModalOpen}
      handleSignupModalOpen={this.handleSignupModalOpen}
      setCurrentUser={this.props.setCurrentUser}
       />
      </>
    );
  };
};

export default withRouter(NavBar);