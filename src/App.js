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
    // this.detailClickHandler = this.detailClickHandler.bind(this);
    this.state = {
      productsData: [],           // JSON data from API
      clickedProduct: null,       // product object of the specific clicked product
      itemToAdd: null,            // item that is queued up to be added into the cart
      quantity: 0,                // the selected quantity of the queued item
      cartTotal: 0,               // sum of .price of all products currently in cart array
    };
  };

  // State in other components:
  // buttonMessage in ProductView.js, holds the text displayed on the 'buy' button in product view

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/products/')
      .then(res => res.json())
      .then(products => this.setState({ productsData: products }) )
  }

  detailClickHandler = (productObj) => {
    this.setState({ clickedProduct: productObj })
  }



  removeItem = (obj) => {
    fetch(`http://localhost:3000/api/v1/cartitems/${obj.id}`, {
      method: 'delete'
    })
      .then(response => response.json());
  }


  ///////// CARITEM SUBMIT STARTS HERE ///////////

  quantityChangeReader = (e) => {
    this.setState({ quantity: e.target.value }, () => console.log(this.state.quantity))
  }

  addItemToCart = (productObj) => {
    this.setState({ itemToAdd: productObj }, () => this.postCartItem()  )     // callback function here will be postCartItem()
  }

  postCartItem = () => {
    console.log('posting');

    fetch('http://localhost:3000/api/v1/cartitems', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(
          {
            cart_id: 1,
            user_id: 1,
            product_id: this.state.itemToAdd.id,
            quantity: this.state.quantity,
            name: this.state.itemToAdd.name,
            price: this.state.itemToAdd.price,
          })
    })

  }




  ///////// CARTITEM SUBMIT ENDS HERE ///////////


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
