// Functional component for the carousel display on the homepage.
// With NavLinks corresponding to different component routes.
import React from 'react';
import { NavLink } from 'react-router-dom';

const Carousel = () => {
  return(
    <div id="carouselExampleIndicators" className="carousel slide caro-main" data-ride="carousel">
      <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 caro-slide" src="https://i.imgur.com/hlIT4OQ.jpg" alt="First slide" />
        <NavLink to='/about' exact>
          <button className="btn">About Us</button>
        </NavLink>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 caro-slide" src="https://i.imgur.com/QrMLsVT.png" alt="First slide" />
        <NavLink to='/events' exact>
          <button className="btn">See Events & Offers</button>
        </NavLink>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100 caro-slide" src="https://i.imgur.com/NWfLRaj.jpg" alt="Third slide" />
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
};

export default Carousel
