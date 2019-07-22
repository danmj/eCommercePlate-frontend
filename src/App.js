import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import { connect } from 'react-redux';

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

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar />
          <Route exact path="/" component={Carousel} />
          <Route exact path="/about" component={OurStory} />
          <Route exact path="/products/all" component={AllProductsList} />
          <Route exact path="/products/necklaces" component={NecklacesList} />
          <Route exact path="/products/bracelets" component={BraceletsList} />
          <Route exact path="/products/earrings" component={EarringsList} />
          <Route exact path="/products/view" component={ProductViewContainer}/>
          <Route exact path="/events" component={Events} />
          <Route exact path="/cart" component={Cart} />
          <Credits />
        </Router>
      </Provider>
    );
  }
}
