import { FETCH_CART } from './types';
import { POST_CARTITEM } from './types';
import { DELETE_CARTITEM } from './types';
import { GET_TOTAL } from './types';

// Action to FETCH items from the cartitems table in the database
export const fetchCart = () => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems/')
    .then(res => res.json())
    .then(cartjson =>
      dispatch({
        type: FETCH_CART,
        payload: cartjson
    }))
}

// Action to receive the total number of items from the cart
export const getTotal = () => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems/')
    .then(res => res.json())
    .then(cartjson =>
      dispatch({
        type: GET_TOTAL,
        payload: cartjson
    }))
}

// Action to POST items to the cartitems table when it is added to the cart
export const postCartitem = cartitem => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartitem)
  })
    .then(res => res.json())
    .then(data =>{
      dispatch({
        type: POST_CARTITEM,
        payload: cartitem
    })})
}

// Action to DELETE items from the cartitems table when delete button is pressed
export const deleteCartitem = obj => dispatch => {
  fetch(`http://localhost:3000/api/v1/cartitems/${obj.id}`, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(products =>
      dispatch({
        type: DELETE_CARTITEM,
        payload: obj
    }) )
}
