// ProductView is the product 'Details' page that comes up when you click
// a CardItem from a product list.
import React, { useState, useEffect } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postCartitem, updateCartitem } from '../actions/cartitemAction.js';
import { fetchCart } from '../actions/cartitemAction.js';

const ProductView = (props) => {

  // State hook for message on "add to cart" button
  const [buttonMessage, setButtonMessage] = useState("Add to cart");

  // State hook for user-selected quantity
  const [quantity, setQuantity] = useState(0);

  // Handles the 'close' button by returning user to previous page
  const backClickHandler = () => {
    props.fetchCart()
    window.history.back()
  }

  // Allows esc key to have the same effect as the 'close' button
  const escFunction = (event) => {
    if(event.keyCode === 27) {
      backClickHandler()
    }
    else {
      return null
    }
  }

  // Effect hook to add listener for esc feature
  useEffect(() => {
    props.fetchCart()
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  }, [])

  // Reads the quantity figure from the dropdown input
  const quantityChangeReader = (e) => {
    setQuantity(e.target.value)
    props.fetchCart()
    setButtonMessage("Add to cart")
  }

  // Stores the item data as a variable 'cartitem' when user presses the
  // 'Add to cart' button. Changes the message on the button as confirmation
  // and sends the variable 'cartitem' to the POST action.
  const addToCartHandler = () => {
    // If no quantity is selected, do not add item, alert the user instead
    if (quantity === 0) {
      alert("Please select a quantity")
    }

    // If a quantity greater than 0 is selected, begin logic to add item
    else if (quantity > 0) {
      // If the item already exists in the cart, then simply add to its existing quantity
      if(props.cart.some(item => item.name === props.products[props.match.params.productId].name) ) {
        const itemToUpdate = props.cart.find(obj => {
          return obj.name === props.products[props.match.params.productId].name
        })
        itemToUpdate.quantity += Number(quantity)
        props.updateCartitem(itemToUpdate)
        setButtonMessage("Added to cart")
      }

      // If the item does not already exist in the cart, then create a new cartitem
      else {
        const cartitem = {
          user_id: 1,
          product_id: props.products[props.match.params.productId].id,
          quantity: quantity,
          name: props.products[props.match.params.productId].name,
          price: props.products[props.match.params.productId].price,
          photo: props.products[props.match.params.productId].photos[1].url,
        }
        props.postCartitem(cartitem)
        setButtonMessage("Added to cart")
      }
    }
  }

  // Product data for the ProductView component
  const renderView = () => {
    if (props.products.length > 0) {
      return(
        <div className="container" style={{ backgroundColor: 'white' }}>
          <div style={{ textAlign: 'right' }}>
            <i className="far fa-times-circle close-icon" onClick={backClickHandler}></i>
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

              <select className="custom-select" style={{ maxWidth: '260px' }} value={props.quantityValue} onChange={quantityChangeReader}>
                  <option value="0">Select Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div style={{ padding: '4px' }}>
                </div>
                <button className="btn btn-secondary" style={{ maxWidth: '260px' }} onClick={addToCartHandler}>{buttonMessage}</button>
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
  updateCartitem: PropTypes.func.isRequired,
  fetchCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: state.products.items,
  cart: state.cart.userCart
})

export default connect(mapStateToProps, { postCartitem, updateCartitem, fetchCart })(ProductView)
