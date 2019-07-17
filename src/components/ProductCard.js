import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class ProductCard extends Component {

  detailClickHandler = () => {
    this.props.detailClickHandler(this.props.product)
  }

  render() {
    return(
      <div className='product-card' style={{ border: 'transparent' }}>
        <NavLink to='/products/view' exact onClick={this.detailClickHandler} style={{ textDecoration: 'none' }}>
          <div className="card-body">
            <img alt='product card thumb' src={this.props.product.photos[1].url} style={{ height: '300px', width: '300px' }}/>
            <h6 className="product-card-text" style={{ textAlign: 'left' }}><b>{this.props.product.name}</b>  ${parseFloat(this.props.product.price).toFixed(2)}</h6>
          </div>
        </NavLink>
      </div>
    )
  }
}
