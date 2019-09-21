import { FETCH_CART, GET_TOTAL, POST_CARTITEM, DELETE_CARTITEM, UPDATE_CARTITEM } from './types';

// Action to FETCH items from the user's cartitems
// Multi (Cart, ProductView)
export const fetchCart = (user) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${user.id}/cartitems/`)
    .then(res => res.json())
    .then(cartjson => {
      dispatch({
        type: FETCH_CART,
        payload: cartjson
      })
      dispatch({
        type: GET_TOTAL,
        payload: cartjson
      });
    });
}

// Action to POST items to the user's cartitems
// Single (ProductView)
export const postCartitem = (cartitem, user) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${user.id}/cartitems`, {
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
      })
    })
}

// Action to DELETE items from the user's cartitems
// Single (Cartitem)
export const deleteCartitem = (itemToDelete, user) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${user.id}/cartitems/${itemToDelete.id}`, {
    method: 'delete'
  })
    .then(response => response.json())
    .then(products =>
      dispatch({
        type: DELETE_CARTITEM,
        payload: itemToDelete
      })
    )
}

// Action to update the caritem's quantity
// Multi (ProductView, Cartitem)
export const updateCartitem = (itemToUpdate, user) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users/${user.id}/cartitems/${itemToUpdate.id}`, {
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
      })
    })
}
