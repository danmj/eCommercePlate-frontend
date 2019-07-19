import { FETCH_CART } from './types';
import { POST_CARTITEM } from './types';
import { DELETE_CARTITEM } from './types';
import { GET_QUANTITY } from './types';

export const fetchCart = () => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems/')
    .then(res => res.json())
    .then(cartjson =>
      dispatch({
        type: FETCH_CART,
        payload: cartjson
    }))
}

export const getQuantity = () => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems/')
    .then(res => res.json())
    .then(cartjson =>
      dispatch({
        type: GET_QUANTITY,
        payload: cartjson
    }))
}

export const postCartitem = cartitem => dispatch => {
  fetch('http://localhost:3000/api/v1/cartitems', {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(cartitem)
  })
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: POST_CARTITEM,
        payload: cartitem
    }))
}

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
