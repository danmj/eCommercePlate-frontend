import React, { Component } from 'react';
import ProductView from '../components/ProductView.js';

export default class ProductViewContainer extends Component {

  render() {
    return(
      <div>
        <ProductView clickedProduct={this.props.clickedProduct} addItemToCart={this.props.addItemToCart} calculateTotal={this.props.calculateTotal} quantityChangeReader={this.props.quantityChangeReader} quantityValue={this.props.quantityValue} />
      </div>
    )
  }

}
