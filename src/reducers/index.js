import { combineReducers } from 'redux';
import cartitemReducer from './cartitemReducer.js';
import productReducer from './productReducer.js';
import clickReducer from './clickReducer.js';

export default combineReducers({
  cart: cartitemReducer,
  products: productReducer,
  click: clickReducer,
})
