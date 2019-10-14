// The credits footer at the bottom of the page.
import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Credits = () => {

  // You want to edit the text here to fit your own data.
  return(
    <div className="credits-section">
      <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">eCommercePlate</h5>
            <p>Customizable template for eCommerce sites.</p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Site Map</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/">
                  <a href="!#" className="credit-text">Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                <a href="!#" className="credit-text">Our Story</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/all">
                <a href="!#" className="credit-text">All Products</a>
                </NavLink>
              </li>
              <li>
                <NavLink to="/events">
                  <a href="!#" className="credit-text">Events</a>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Social</h5>
            <ul className="list-unstyled">
              <li>
                <a href="!#" className="credit-text">Instagram</a>
              </li>
              <li>
                <a href="!#" className="credit-text">Twitter</a>
              </li>
              <li>
                <a href="!#" className="credit-text">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">© 2019 Copyright: Daniel Jung
      </div>
      </footer>
    </div>
  )
}

export default withRouter(Credits)
