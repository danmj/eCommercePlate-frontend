// ProductCard is the individual clickable product displayed within a list.
// Clicking on a ProductCard will take you to that product's view page.
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductCard extends Component {

  render() {
    return(
        <div className='product-card' style={{ border: 'transparent' }}>
          <Link key={this.props.product.id} to={`/product/${this.props.product.id - 1}`}>
            <div className="card-body">
              <img alt='product card thumb' src={this.props.product.photos[1].url} style={{ height: '300px', width: '300px' }}/>
              <h6 className="product-card-text" style={{ textAlign: 'left' }}><b>{this.props.product.name}</b>  ${parseFloat(this.props.product.price).toFixed(2)}</h6>
            </div>
          </Link>
        </div>
    )
  }
}

export default ProductCard
