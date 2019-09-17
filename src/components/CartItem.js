// CartItem is each individual row in the shopping cart.
// Each row corresponds to a product, holding it's image, name, price and quantity.
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCartitem, updateCartitem } from '../actions/cartitemAction.js';

const CartItem = (props) => {

  const userString = localStorage.getItem("user")
  const currentUser = JSON.parse(userString)

  // Quantity figure for internal use in changing updatingItem
  const [inputQuantity, setInputQuantity] = useState(props.cartObj.quantity);

  // Quantity figure for visual use to display on cartitem line
  const [cartQuantity, setCartQuantity] = useState(props.cartObj.quantity);

  // Reads the clicking of the 'delete' icon.
  const removeItem = () => {
    props.deleteCartitem(props.cartObj, currentUser)
  }

  const quantityInputHandler = (e) => {
    setInputQuantity(e.target.value)
  }

  const updateQuantity = () => {
    if (Number(inputQuantity) === 0) {
      props.deleteCartitem(props.cartObj, currentUser)
    }
    else if (Number(inputQuantity) > 0) {
      const updatingItem = props.cartObj
      updatingItem.quantity = inputQuantity
      props.updateCartitem(updatingItem, currentUser)
      setCartQuantity(inputQuantity)
    }
  }

  return(
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img src={props.cartObj.photo} alt="cart" width="70" className="img-fluid rounded shadow-sm" />
          <div className="ml-3 d-inline-block align-middle">
            <h5 className="mb-0"><a href={`/product/${props.cartObj.product_id - 1}`} className="text-dark d-inline-block align-middle">{props.cartObj.name}</a></h5><span className="text-muted font-weight-normal font-italic d-block">{props.cartObj.type_id}</span>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle">
        <strong>{Number(props.cartObj.price * cartQuantity).toFixed(2)}</strong>
      </td>
      <td className="border-0 align-middle">
        <input style={{ width: "30px" }} defaultValue={inputQuantity} onChange={quantityInputHandler} />
        <button onClick={updateQuantity}>Update</button>
      </td>
      <td className="border-0 align-middle">
        <i className="far fa-trash-alt delete-icon" onClick={removeItem}></i>
      </td>
    </tr>
  )
}

CartItem.propTypes = {
  deleteCartitem: PropTypes.func.isRequired,
  updateCartitem: PropTypes.func.isRequired
}

export default connect(null, { deleteCartitem, updateCartitem })(CartItem)
