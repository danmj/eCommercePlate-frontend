// Root reducer
import { combineReducers } from 'redux';
import cartitemReducer from './cartitemReducer.js';
import productReducer from './productReducer.js';
import userReducer from './userReducer.js'

export default combineReducers({
  cart: cartitemReducer,
  products: productReducer,
  users: userReducer
})
