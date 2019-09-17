// Application imports
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProducts } from './actions/productAction.js';

// Component imports
import NavBar from './containers/NavBar.js';
import Carousel from './components/Carousel.js';
import OurStory from './components/OurStory.js';
import Events from './components/Events.js';
import AllProductsList from './containers/AllProductsList.js';
import NecklacesList from './containers/NecklacesList.js';
import BraceletsList from './containers/BraceletsList.js';
import EarringsList from './containers/EarringsList.js';
import Credits from './components/Credits.js';
import ProductViewContainer from './containers/ProductViewContainer.js';
import Cart from './components/Cart.js';
import ScrollToTop from './components/ScrollToTop.js';
import Login from './containers/Login.js';
import Signup from './containers/Signup.js';

class App extends Component {

  // Fetching product data from backend so all routed components have access
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return(
      <Router>
        <ScrollToTop>
          <NavBar />
          <Route exact path="/" component={Carousel} />
          <Route exact path="/about" component={OurStory} />
          <Route exact path="/products/necklaces" component={NecklacesList} />
          <Route exact path="/products/bracelets" component={BraceletsList} />
          <Route exact path="/products/earrings" component={EarringsList} />
          <Route exact path="/products/all" component={AllProductsList} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Route path='/product' render={routerProps => <ProductViewContainer {...routerProps} />} />
          <Credits />
        </ScrollToTop>
      </Router>
    );
  }
}

App.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
}

export default connect(null, { fetchProducts })(App)
