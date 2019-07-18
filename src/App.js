import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import NavBar from './containers/NavBar.js';
import DemoCarousel from './components/DemoCarousel.js';
import OurStory from './components/OurStory.js';
import AllProductsList from './containers/AllProductsList.js';
import NecklacesList from './containers/NecklacesList.js';
import BraceletsList from './containers/BraceletsList.js';
import EarringsList from './containers/EarringsList.js';
import Events from './components/Events.js';
import Credits from './components/Credits.js';
import ProductViewContainer from './containers/ProductViewContainer.js';
import Cart from './components/Cart.js';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedProduct: null,       // product object of the specific clicked product
    };
  };

  // State in other components:
  // buttonMessage in ProductView.js, holds the text displayed on the 'buy' button in product view
  // userCartItems in Cart.js, this is the fetched data of a user's Cartitems
  // cartTotal in Cart.js, this is the count of the summed prices of the user's Cartitems

  detailClickHandler = (productObj) => {
    this.setState({ clickedProduct: productObj })
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavBar calculateTotal={this.calculateTotal} />

          <Route exact path="/" component={DemoCarousel} />

          <Route exact path="/about" component={OurStory} />

          <Route
            path="/products/all"
            render={(routeProps) => (
              <AllProductsList detailClickHandler={this.detailClickHandler} />
            )}
          />

          <Route
            path="/products/necklaces"
            render={(routeProps) => (
              <NecklacesList detailClickHandler={this.detailClickHandler} />
            )}
          />

          <Route
            path="/products/bracelets"
            render={(routeProps) => (
              <BraceletsList detailClickHandler={this.detailClickHandler} />
            )}
          />

          <Route
            path="/products/earrings"
            render={(routeProps) => (
              <EarringsList detailClickHandler={this.detailClickHandler} />
            )}
          />

          <Route
            path="/products/view"
            render={(routeProps) => (
              <ProductViewContainer clickedProduct={this.state.clickedProduct} addItemToCart={this.addItemToCart} calculateTotal={this.calculateTotal} quantityChangeReader={this.quantityChangeReader} quantityValue={this.state.quantityValue} />
            )}
          />

          <Route exact path="/events" component={Events} />

          <Route
            path="/cart"
            render={(routeProps) => (
              <Cart shoppingCart={this.state.cart} cartTotal={this.state.cartTotal} removeItem={this.removeItem} quantityValue={this.state.quantityValue} />
            )}
          />

          <Credits />
        </Router>
      </Provider>
    );
  }
}
