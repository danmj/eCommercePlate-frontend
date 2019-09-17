import { FETCH_USERS } from '../actions/types';

const initialState = {
  users: [],
}

// FETCH_PRODUCTS fetches the products data from the database and stores it in the 'items' state
export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
      
    default:
      return state
  }
}
