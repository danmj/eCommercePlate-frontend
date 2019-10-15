import { SET_CURRENT_USER, FAILED_LOGIN, LOGOUT_USER } from './types';

// Action to login user and set token to local storage
export const loginUser = (username, password) => {
  return (dispatch) => {
    dispatch({ type: 'AUTHENTICATING_USER' })
    fetch(`http://localhost:3000/api/v1/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw response
        }
      })
      .then(JSONResponse => {
        localStorage.setItem('jwt', JSONResponse.jwt)
        dispatch({
          type: SET_CURRENT_USER,
          payload: JSONResponse.user
        })
      })
      .catch(r => r.json().then(e => dispatch({ type: FAILED_LOGIN, payload: e.message })))
  }
}

// Action to receive the user who is currently logged in
export const fetchCurrentUser = () => {
  return (dispatch) => {
    dispatch(authenticatingUser())
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/profile`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`
      }
    })
      .then(response => response.json())
      .then((JSONResponse) => dispatch(setCurrentUser(JSONResponse.user)))
  }
}

// Action to set current user to user state
export const setCurrentUser = (userData) => ({
  type: SET_CURRENT_USER,
  payload: userData
})

// Action to send error message if login fails
export const failedLogin = (errorMsg) => ({
  type: FAILED_LOGIN,
  payload: errorMsg
})

// Action to set authenticating state
export const authenticatingUser = () => ({
  type: 'AUTHENTICATING_USER'
})

// Action to remove user from user state when logged out
export const logOut = () => {
  localStorage.removeItem('jwt')
  return {type: LOGOUT_USER}
}

// Action to POST new user and set it to the current logged in state
export const signupUser = (name, username, password) => {
  return(dispatch) => {
    const data = {user: {name, username, password} }
    fetch('http://localhost:3000/api/v1/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(r => {
      localStorage.setItem('jwt', r.jwt)
      dispatch({
        type: SET_CURRENT_USER,
        payload: r.user
      })
    })
  }
}

//
// Action to fetch the array of created users in the database
// ///////////////////////////////////////////////
// export const fetchUsers = () => dispatch => {
//   fetch('http://localhost:3000/api/v1/users/')
//     .then(res => res.json())
//     .then(userjson => {
//       dispatch({
//         type: FETCH_USERS,
//         payload: userjson
//       })
//     })
// }

// Action to POST a newly signed up user
////////////////////////////////////////////////////
// export const createUser = (user) => dispatch => {
//   fetch(`http://localhost:3000/api/v1/users`, {
//     method: 'POST',
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(user)
//   })
//   window.location.href = '/login';
// }

// Action to set local storage to the logged in user
////////////////////////////////////////////////////
// export const loginUser = (user) => dispatch => {
//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = '/';
// }

// Action to revert local storage to 'none' when user logs out
//////////////////////////////////////////////////////////////
// export const logoutUser = (user) => dispatch => {
//   localStorage.setItem("user", "none");
//   window.location.href = '/';
// }
