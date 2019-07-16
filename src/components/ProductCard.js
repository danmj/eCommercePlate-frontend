import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


export default class ProductCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mousedOver: "false"
    }
  }

  detailClickHandler = () => {
    this.props.detailClickHandler(this.props.product)
  }

  mouseEnterHandler = () => {
    this.setState({ mousedOver: "true" })
  }

  mouseLeaveHandler = () => {
    this.setState({ mousedOver: "false" })
  }

  render() {
    return(
      <div style={{ border: 'transparent' }} onMouseEnter={() => this.mouseEnterHandler()} onMouseLeave={() => this.mouseLeaveHandler()} >
        <NavLink to='/products/view' exact onClick={this.detailClickHandler} style={{ textDecoration: 'none' }}>
          <div className="card-body">
            <img alt='product card thumb' src={this.props.product.photos[1].url} style={{ height: '300px', width: '300px' }}/>
            <h6 className={ `text-muted product-card-mouseover-${this.state.mousedOver}` } style={{ textAlign: 'left' }}><b>{this.props.product.name}</b>  ${parseFloat(this.props.product.price).toFixed(2)}</h6>
          </div>
        </NavLink>
      </div>
    )
  }
}
