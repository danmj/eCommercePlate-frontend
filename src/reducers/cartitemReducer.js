import { FETCH_CART, DELETE_CARTITEM, GET_TOTAL, UPDATE_CARTITEM } from '../actions/types';

const initialState = {
  userCart: [],
  total: 0,
}

export default function(state = initialState, action) {
  switch(action.type) {
    // Adds fetched cartitems to the 'userCart' state
    case FETCH_CART:
      return {
        ...state,
        userCart: action.payload
      };

    // Calculates the total price of the shopping cart, stores as the 'total' state
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

    // Removes item from the 'userCart' state and recalculates the total less the
    // removed item.
    case DELETE_CARTITEM:
      const array = state.userCart.filter(item => item !== action.payload)
      const originalTotal = state.total
      let newTotal = originalTotal - (action.payload.price * action.payload.quantity)

      return {
        ...state,
        userCart: array,
        total: newTotal
      };

    // Updates quantity of item if it is already in cart and user changes quantity
    // If they update from the ProductView, it will add to cart quantity.
    // If they update from Cart it will replace entirely.
    // case UPDATE_CARTITEM:
    //   return {
    //     ...state,
    //     userCart: action.payload,
    //   };

    default:
      return state
  }
}
