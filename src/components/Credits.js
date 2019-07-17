import React from 'react';
import { NavLink } from 'react-router-dom';

const Credits = (props) => {

  return(
    <div className="credits-section">

      <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Project Site</h5>

            <p>Special thanks to: </p>
            <ul style={{ fontSize: '10px' }}>
              <li>Bootstrap</li>
              <li>Ion-Icons</li>
              <li>Popper.js</li>
              <li>React-Shopping-Cart</li>
              <li>React-Image-Magnify</li>
            </ul>

          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Site Map</h5>

            <ul className="list-unstyled">
              <li>
                <NavLink to='/' exact>
                  <a href="#!" className="credit-text">Home</a>
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' exact>
                  <a href="#!" className="credit-text">Our Story</a>
                </NavLink>
              </li>
              <li>
                <NavLink to='/products/all' exact>
                  <a href="#!" className="credit-text">All Products</a>
                </NavLink>
              </li>
              <li>
                <NavLink to='/events' exact>
                  <a href="#!" className="credit-text">Events</a>
                </NavLink>
              </li>
            </ul>

          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Social</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="credit-text">Instagram</a>
              </li>
              <li>
                <a href="#!" className="credit-text">Twitter</a>
              </li>
              <li>
                <a href="#!" className="credit-text">Facebook</a>
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

export default Credits
