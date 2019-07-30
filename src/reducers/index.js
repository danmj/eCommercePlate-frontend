// Root reducer
import { combineReducers } from 'redux';
import cartitemReducer from './cartitemReducer.js';
import productReducer from './productReducer.js';

export default combineReducers({
  cart: cartitemReducer,
  products: productReducer,
})
