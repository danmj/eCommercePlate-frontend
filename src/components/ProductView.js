// ProductView is the product 'Details' page
import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCartitem } from '../actions/cartitemAction.js';

class ProductView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonMessage: 'Add to cart',
      quantity: 0,
    }
  }

  backClickHandler = () => {
    window.history.back()
  }

  quantityChangeReader = (e) => {
    this.setState({ quantity: e.target.value })
  }

  addToCartClickHandler = () => {
    this.setState({ buttonMessage: 'Added to cart'})
    const cartitem = {
      user_id: 1,
      product_id: this.props.products[this.props.match.params.productId].id,
      quantity: this.state.quantity,
      name: this.props.products[this.props.match.params.productId].name,
      price: this.props.products[this.props.match.params.productId].price,
      photo: this.props.products[this.props.match.params.productId].photos[1].url,
    }
    this.props.postCartitem(cartitem)
  }

  renderView = () => {
    if(this.props.products.length > 0) {
      return(
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
                src: this.props.products[this.props.match.params.productId].photos[1].url,
            },
            largeImage: {
                src: this.props.products[this.props.match.params.productId].photos[1].url,
                width: 1200,
                height: 1800,
            }
          }} enlargedImagePosition='over' isHintEnabled={true} />

            </div>

            <div className="col-md-4">
              <h1 className="my-4">{this.props.products[this.props.match.params.productId].name}</h1>
              <h3>${parseFloat(this.props.products[this.props.match.params.productId].price).toFixed(2)}</h3>

              <p>{this.props.products[this.props.match.params.productId].description}</p>
              <p>{this.props.products[this.props.match.params.productId].comment}</p>
              <p>{this.props.products[this.props.match.params.productId].subtitle}</p>


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
      )
    }
    else{
      return null
    }
  }

  render() {
    return(
      <div style={{ backgroundColor: '#eeeeee' }}>
        {this.renderView()}
      </div>
    )
  }
}

ProductView.propTypes = {
  postCartitem: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, { postCartitem })(ProductView)
