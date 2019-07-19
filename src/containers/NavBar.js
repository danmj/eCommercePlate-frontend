import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { clickClose } from '../actions/clickAction.js';

class NavBar extends Component {

  clickHandler = () => {
    this.props.clickClose()
  }

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to='/' exact>
            <a className="navbar-brand" href="#" style={{ fontFamily: "Times", fontSize: 28 }} onClick={() => this.clickHandler()}>Project</a>
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <NavLink to='/about' exact>
                  <a className="nav-link" href="#" onClick={() => this.clickHandler()}>OUR STORY</a>
                </NavLink>
              </li>
              <li className="nav-item dropdown" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => this.clickHandler()}>
                  PRODUCTS
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink to='/products/necklaces' exact>
                    <a className="dropdown-item" href="#" onClick={() => this.clickHandler()}>NECKLACES</a>
                  </NavLink>
                  <NavLink to='/products/bracelets' exact>
                    <a className="dropdown-item" href="#" onClick={() => this.clickHandler()}>BRACELETS</a>
                  </NavLink>
                  <NavLink to='/products/earrings' exact>
                    <a className="dropdown-item" href="#" onClick={() => this.clickHandler()}>EARRINGS</a>
                  </NavLink>
                  <div className="dropdown-divider"></div>
                  <NavLink to='/products/all' exact>
                    <a className="dropdown-item" href="#" onClick={() => this.clickHandler()}>ALL PRODUCTS</a>
                  </NavLink>
                </div>
              </li>
              <li className="nav-item" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <NavLink to='/events' exact>
                <a className="nav-link" href="#" onClick={() => this.clickHandler()}>EVENTS</a>
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav form-inline my-2 my-lg-0">
              <li className="nav-item">
                <NavLink to='/cart' exact>
                  <a className="nav-link" href="#" onClick={() => this.clickHandler()}><ion-icon name="cart"></ion-icon></a>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

}

export default connect(null, { clickClose })(NavBar)
