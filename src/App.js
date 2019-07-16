import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    this.detailClickHandler = this.detailClickHandler.bind(this);
    this.state = {
      productsData: [],
      clickedProduct: null,
      cart: [],
      cartTotal: 0,
      quantityValue: "0"
    };
  };

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/products/')
      .then(res => res.json())
      .then(products => this.setState({ productsData: products }) )
  }

  detailClickHandler = (productObj) => {
    this.setState({ clickedProduct: productObj })
  }

  addItemToCart = (productObj) => {
    this.setState({ cart: [...this.state.cart, productObj] }, () => console.log(this.state.cart) )
  }

  calculateTotal = () => {
    const prices = this.state.cart.map((cartObj) =>
      cartObj.price
    )
    let summedTotal = 0

    for(var i = 0; i < prices.length; i++) {
      summedTotal += prices[i]
    }

    this.setState({ cartTotal: summedTotal }, () => console.log(this.state.cartTotal))
  }

  removeItem = (obj) => {
    const updatedCart = this.state.cart.filter((cartObj) =>
      cartObj.id !== obj.id
    )
    this.setState({ cart: updatedCart }, () => this.calculateTotal())
  }

  quantityChangeReader = (e) => {
    this.setState({ quantityValue: e.target.value }, () => console.log(this.state.quantityValue) )
    e.preventDefault()
  }

  render() {
    return (
      <Router>
        <NavBar calculateTotal={this.calculateTotal} />
        <Route exact path="/" component={DemoCarousel} />
        <Route exact path="/about" component={OurStory} />

        <Route
          path="/products/all"
          render={(routeProps) => (
            <AllProductsList productsData={this.state.productsData} detailClickHandler={this.detailClickHandler} />
          )}
        />

        <Route
          path="/products/necklaces"
          render={(routeProps) => (
            <NecklacesList productsData={this.state.productsData} detailClickHandler={this.detailClickHandler} />
          )}
        />

        <Route
          path="/products/bracelets"
          render={(routeProps) => (
            <BraceletsList productsData={this.state.productsData} detailClickHandler={this.detailClickHandler} />
          )}
        />

        <Route
          path="/products/earrings"
          render={(routeProps) => (
            <EarringsList productsData={this.state.productsData} detailClickHandler={this.detailClickHandler} />
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
    );
  }
}
