// ProductView is the product 'Details' page that comes up when you click
// a CardItem from a product list.
import React, { useState, useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCartitem } from '../actions/cartitemAction.js';

const ProductView = (props) => {

  // State hook for message on "add to cart" button
  const [buttonMessage, setButtonMessage] = useState("Add to cart");

  // State hook for user-selected quantity
  const [quantity, setQuantity] = useState(0);

  // Handles the 'close' button by returning user to previous page
  const backClickHandler = () => {
    window.history.back()
  }

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      window.history.back()
    }
    else {
      return null
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  })



  // Reads the quantity figure from the dropdown input
  const quantityChangeReader = (e) => {
    setQuantity(e.target.value)
    //this.setState({ quantity: e.target.value })
  }

  // Stores the item data as a variable 'cartitem' when user presses the
  // 'Add to cart' button. Changes the message on the button as confirmation
  // and sends the variable 'cartitem' to the POST action.
  const addToCartHandler = () => {
    if (quantity > 0) {
      setButtonMessage("Added to cart")
      const cartitem = {
        user_id: 1,
        product_id: props.products[props.match.params.productId].id,
        quantity: quantity,
        name: props.products[props.match.params.productId].name,
        price: props.products[props.match.params.productId].price,
        photo: props.products[props.match.params.productId].photos[1].url,
      }
      props.postCartitem(cartitem)
    }
    else {
      alert("Please select a quantity")
    }
  }

  // Product data for the ProductView component
  const renderView = () => {
    if (props.products.length > 0) {
      return(
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div style={{ textAlign: 'right' }}>
            <i className="far fa-times-circle" onClick={() => backClickHandler()}></i>
          </div>
          <div className="row">
            <div className="col-md-8">

            <ReactImageMagnify  {...{
            smallImage: {
                alt: 'smaller',
                isFluidWidth: false,
                width: 360,
                height: 500,
                src: props.products[props.match.params.productId].photos[1].url,
            },
            largeImage: {
                src: props.products[props.match.params.productId].photos[1].url,
                width: 1200,
                height: 1800,
            }
          }} enlargedImagePosition='over' isHintEnabled={true} />

            </div>

            <div className="col-md-4">
              <h1 className="my-4">{props.products[props.match.params.productId].name}</h1>
              <h3>${parseFloat(props.products[props.match.params.productId].price).toFixed(2)}</h3>

              <p>{props.products[props.match.params.productId].description}</p>
              <p>{props.products[props.match.params.productId].comment}</p>
              <p>{props.products[props.match.params.productId].subtitle}</p>


              <select className="custom-select" style={{ maxWidth: '260px' }} value={props.quantityValue} onChange={(e) => quantityChangeReader(e)}>
                  <option value="0">Select Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <div style={{ padding: '4px' }}>
                </div>

                <button className="btn btn-secondary" style={{ maxWidth: '260px' }} onClick={() => addToCartHandler()}>{buttonMessage}</button>
            </div>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }


    return(
      <div style={{ backgroundColor: '#eeeeee' }}>
        {renderView()}
      </div>
    )

}

ProductView.propTypes = {
  postCartitem: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  products: state.products.items,
})

export default connect(mapStateToProps, { postCartitem })(ProductView)
