import { FETCH_PRODUCTS } from './types';

// Action to fetch products from the backend database
export const fetchProducts = () => dispatch => {
  fetch('http://localhost:3000/api/v1/products/')
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
    }) )
}
