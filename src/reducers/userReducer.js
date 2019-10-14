import { SET_CURRENT_USER, AUTHENTICATING_USER, LOGOUT_USER, FAILED_LOGIN } from '../actions/types';

const initialState = {
  user: null,
  loggedIn: false,
  authenticatingUser: false,
  failedLogin: false,
  error: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
        authenticatingUser: false
      }

    case AUTHENTICATING_USER:
      return {
        ...state,
        authenticatingUser: true
      }

    case LOGOUT_USER:
      return initialState

    case FAILED_LOGIN:
      return {
        ...state,
        failedLogin: true,
        error: action.payload,
        authenticatingUser: false
      }

    default:
      return state
  }
}
