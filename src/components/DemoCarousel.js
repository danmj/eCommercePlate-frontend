import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DemoCarousel extends Component {

  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ height: "auto" }}>
        <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="https://i.imgur.com/hlIT4OQ.jpg" alt="First slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/about' exact>
            <button className="btn">About Us</button>
          </NavLink>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://i.imgur.com/QrMLsVT.png" alt="First slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/events' exact>
          <button className="btn">See Events & Offers</button>
          </NavLink>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://i.imgur.com/NWfLRaj.jpg" alt="Third slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/products/all' exact>
          <button className="btn">See Products</button>
          </NavLink>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      </div>
    );
  }
};
