// Navigation bar at the top of the website.
// With NavLinks corresponding to different component routes.
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../actions/userAction.js';

const NavBar = (props) => {

  const renderLoginCart = () => {
    if (props.loggedIn) {
      return (
        <React.Fragment>
          <li className="nav-item">
            <NavLink to="/cart">
              <a className="nav-link" href="!#"><i className="fas fa-shopping-cart"></i></a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login">
              <a onClick={logoutClick} className="nav-link" href="!#">LOGOUT</a>
            </NavLink>
          </li>
        </React.Fragment>
      )
    }
    else {
      return (
        <li className="nav-item">
          <NavLink to="/login">
            <a className="nav-link" href="!#">LOGIN</a>
          </NavLink>
        </li>
      )
    }
  }

  const logoutClick = (e) => {
    props.logOut()
  }

  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">
          <a className="navbar-brand" href="!#">eCommercePlate</a>
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item nav-item-pad">
              <NavLink to="/about">
                <a className="nav-link" href="!#">OUR STORY</a>
              </NavLink>
            </li>
            <li className="nav-item dropdown nav-item-pad">
              <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PRODUCTS
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/products/necklaces"><a className="dropdown-item" href="!#">NECKLACES</a></NavLink>
                <NavLink to="/products/bracelets"><a className="dropdown-item" href="!#">BRACELETS</a></NavLink>
                <NavLink to="/products/earrings"><a className="dropdown-item" href="!#">EARRINGS</a></NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/products/all"><a className="dropdown-item" href="!#">ALL PRODUCTS</a></NavLink>
              </div>
            </li>
            <li className="nav-item nav-item-pad">
              <NavLink to="/events">
                <a className="nav-link" href="!#">EVENTS</a>
              </NavLink>
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
  logOut: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  loggedIn: state.users.loggedIn,
  user: state.users.user
})

export default withRouter(connect(mapStateToProps, { logOut })(NavBar))
