import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  items: [],
}

// FETCHes the products data from the database and stores it in the 'items' state
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        items: action.payload
      };

    default:
      return state
  }
}
