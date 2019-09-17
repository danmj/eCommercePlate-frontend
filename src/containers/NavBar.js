// Navigation bar at the top of the website.
// With NavLinks corresponding to different component routes.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userAction.js';

const NavBar = (props) => {
  const renderLoginCart = () => {
    if (localStorage.getItem("user") === "none") {
      return (
        <li className="nav-item">
          <a className="nav-link" href="/login">LOGIN</a>
        </li>
      )
    }
    else if (localStorage.getItem("user") !== "none") {
      return (
        <React.Fragment>
          <li className="nav-item">
            <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i></a>
          </li>
          <li className="nav-item">
            <a onClick={logoutClick} className="nav-link" href="/login">LOGOUT</a>
          </li>
        </React.Fragment>
      )
    }
  }

  const logoutClick = (e) => {
    e.preventDefault()
    props.logoutUser()
  }

  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">eCommercePlate</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <a className="nav-link" href="/about">OUR STORY</a>
            </li>
            <li className="nav-item dropdown" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PRODUCTS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/products/necklaces">NECKLACES</a>
                <a className="dropdown-item" href="/products/bracelets">BRACELETS</a>
                <a className="dropdown-item" href="/products/earrings">EARRINGS</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/products/all">ALL PRODUCTS</a>
              </div>
            </li>
            <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <a className="nav-link" href="/events">EVENTS</a>
            </li>
          </ul>
          <ul className="navbar-nav form-inline my-2 my-lg-0">
            {renderLoginCart()}
          </ul>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
}

export default connect(null, { logoutUser })(NavBar)
