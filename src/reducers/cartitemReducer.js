import { FETCH_CART, POST_CARTITEM, DELETE_CARTITEM, GET_QUANTITY} from '../actions/types'

const initialState = {
  userCart: [],
  cartItem: {},
  total: 0
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_CART:
      return {
        ...state,
        userCart: action.payload
      };

    case GET_QUANTITY:
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

    case POST_CARTITEM:
      return {
        ...state,
        cartItem: action.payload
      };

    case DELETE_CARTITEM:
      const array = state.userCart.filter(obj => obj !== action.payload)
      return {
        ...state,
        userCart: array
      };

    default:
      return state
  }
}
