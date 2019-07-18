// ROOT REDUCER
import { combineReducers } from 'redux';
import productReducer from './productReducer.js';
import cartitemReducer from './cartitemReducer.js';

export default combineReducers({
  cart: cartitemReducer,
  products: productReducer,
})
