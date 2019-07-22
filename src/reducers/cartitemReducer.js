import { FETCH_CART, POST_CARTITEM, DELETE_CARTITEM, GET_TOTAL } from '../actions/types';

const initialState = {
  userCart: [],
  total: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CART:
      return {
        ...state,
        userCart: action.payload
      };

    case GET_TOTAL:
      const prices = action.payload.map((cartObj) =>
        (cartObj.price * cartObj.quantity))
      let summedTotal = 0
      for(var i = 0; i < prices.length; i++) {
        summedTotal += prices[i]
      }
      return {
        ...state,
        total: summedTotal
      };

    case DELETE_CARTITEM:
      const array = state.userCart.filter(obj => obj !== action.payload)
      const originalTotal = state.total
      let newTotal = originalTotal - (action.payload.price * action.payload.quantity)

      return {
        ...state,
        userCart: array,
        total: newTotal
      };

    default:
      return state
  }
}
