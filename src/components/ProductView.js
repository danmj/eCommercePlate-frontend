// ProductView is the product 'Details' page
import React, { Component } from 'react'
import ReactImageMagnify from 'react-image-magnify';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCartitem } from '../actions/cartitemAction.js';
import { clickClose } from '../actions/clickAction.js';

class ProductView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonMessage: 'Add to cart',
      quantity: 0,
    }
  }

  backClickHandler = () => {
    this.props.clickClose()
  }

  quantityChangeReader = (e) => {
    this.setState({ quantity: e.target.value })
  }

  addToCartClickHandler = () => {
    this.setState({ buttonMessage: 'Added to cart'})
    const cartitem = {
      user_id: 1,
      product_id: this.props.clickedProduct.id,
      quantity: this.state.quantity,
      name: this.props.clickedProduct.name,
      price: this.props.clickedProduct.price,
      photo: this.props.clickedProduct.photos[1].url
    }
    this.props.postCartitem(cartitem)
  }


  render() {
    return(
      <div style={{ backgroundColor: '#eeeeee' }}>

        <div className="container" style={{ backgroundColor: 'white' }}>
          <div style={{ textAlign: 'right' }}>
            <ion-icon name="close-circle-outline" onClick={() => this.backClickHandler()}></ion-icon>
          </div>
          <div className="row">
            <div className="col-md-8">

            <ReactImageMagnify  {...{
            smallImage: {
                alt: 'smaller',
                isFluidWidth: false,
                width: 360,
                height: 500,
                src: this.props.clickedProduct.photos[1].url
            },
            largeImage: {
                src: this.props.clickedProduct.photos[1].url,
                width: 1200,
                height: 1800,
            }
          }} enlargedImagePosition='over' isHintEnabled={true} />

            </div>

            <div className="col-md-4">
              <h1 className="my-4">{this.props.clickedProduct.name}</h1>
              <h3>${parseFloat(this.props.clickedProduct.price).toFixed(2)}</h3>

              <p>{this.props.clickedProduct.description}</p>
              <p>{this.props.clickedProduct.comment}</p>
              <p>{this.props.clickedProduct.subtitle}</p>


              <select className="custom-select" style={{ maxWidth: '260px' }} value={this.props.quantityValue} onChange={(e) => this.quantityChangeReader(e)}>
                  <option value="0">Select Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <div style={{ padding: '4px' }}>
                </div>

                <button className="btn btn-secondary" style={{ maxWidth: '260px' }} onClick={() => this.addToCartClickHandler()}>{this.state.buttonMessage}</button>
            </div>
          </div>
      </div>
    </div>
    )
  }
}


export default connect(null, { postCartitem, clickClose })(ProductView)
