import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productAction.js';
import { clickCard } from '../actions/clickAction.js';

class ProductCard extends Component {

  detailClickHandler = () => {
    this.props.clickCard(this.props.product)
  }

  render() {
    return(
      <div className='product-card' style={{ border: 'transparent' }} onClick={this.detailClickHandler}>
          <div className="card-body">
            <img alt='product card thumb' src={this.props.product.photos[1].url} style={{ height: '300px', width: '300px' }}/>
            <h6 className="product-card-text" style={{ textAlign: 'left' }}><b>{this.props.product.name}</b>  ${parseFloat(this.props.product.price).toFixed(2)}</h6>
          </div>
      </div>
    )
  }
}

ProductCard.propTypes = {
  clickCard: PropTypes.func.isRequired,
}

export default connect(null, {clickCard})(ProductCard)
