import { FETCH_CART, GET_TOTAL, DELETE_CARTITEM, UPDATE_CARTITEM } from '../actions/types';

const initialState = {
  userCart: [],
  total: 0
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
      let summedTotal = 0
      if(action.payload.length > 0) {
        action.payload.forEach(cartObj => {
          summedTotal += cartObj.price * cartObj.quantity
        })
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
      const newTotal = originalTotal - (action.payload.price * action.payload.quantity)

      return {
        ...state,
        userCart: array,
        total: newTotal
      };

    // Updates quantity of item if it is already in cart and user changes quantity
    // If they update from the ProductView, it will add to cart quantity.
    // If they update from Cart it will replace entirely.
    case UPDATE_CARTITEM:
      const cartArray = state.userCart
      const index = state.userCart.indexOf(action.payload);
      cartArray[index] = action.payload

      let updatedTotal = 0
      cartArray.forEach(cartObj => {
        updatedTotal += cartObj.price * cartObj.quantity
      })

      return {
        ...state,
        userCart: cartArray,
        total: updatedTotal
      };

    default:
      return state
  }
}
