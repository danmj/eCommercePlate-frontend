import { FETCH_CART, POST_CARTITEM, DELETE_CARTITEM, GET_TOTAL, UPDATE_CARTITEM } from './types';

// Action to FETCH items from the cartitems table in the database
export const fetchCart = () => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems/')
    .then(res => res.json())
    .then(cartjson => {
      dispatch({
        type: FETCH_CART,
        payload: cartjson
      });
      dispatch({
        type: GET_TOTAL,
        payload: cartjson
      });
    });
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
export const deleteCartitem = itemToDelete => dispatch => {
  fetch(`http://localhost:3000/api/v1/cartitems/${itemToDelete.id}`, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(products =>
      dispatch({
        type: DELETE_CARTITEM,
        payload: itemToDelete
    }) )
}

// Action to update the caritem's quantity
export const updateCartitem = itemToUpdate => dispatch => {
  fetch(`http://localhost:3000/api/v1/cartitems/${itemToUpdate.id}`, {
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: itemToUpdate.quantity
      })
  })
    .then(res => res.json())
    .then(data =>{
      dispatch({
        type: UPDATE_CARTITEM,
        payload: itemToUpdate
    })})
}
