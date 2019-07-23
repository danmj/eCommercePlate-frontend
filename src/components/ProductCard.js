import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {

  return(
    <Link key={props.product.id} to={`/product/${props.product.id - 1}`}>
      <div className='product-card' style={{ border: 'transparent' }}>
          <div className="card-body">
            <img alt='product card thumb' src={props.product.photos[1].url} style={{ height: '300px', width: '300px' }}/>
            <h6 className="product-card-text" style={{ textAlign: 'left' }}><b>{props.product.name}</b>  ${parseFloat(props.product.price).toFixed(2)}</h6>
          </div>
      </div>
    </Link>
  )
}

export default ProductCard
