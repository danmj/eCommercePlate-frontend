import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class DemoCarousel extends Component {

  render() {
    return (
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ height: "auto" }}>
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://i.imgur.com/hlIT4OQ.jpg" alt="First slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/about' exact>
            <button class="btn">About Us</button>
          </NavLink>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://i.imgur.com/QrMLsVT.png" alt="First slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/events' exact>
          <button class="btn">See Events & Offers</button>
          </NavLink>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://i.imgur.com/NWfLRaj.jpg" alt="Third slide" style={{ height: "710px", width: "auto"}} />
          <NavLink to='/products/all' exact>
          <button class="btn">See Products</button>
          </NavLink>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      </div>
    );
  }
};
