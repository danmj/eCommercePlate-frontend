import { SET_CURRENT_USER, FAILED_LOGIN, LOGOUT_USER } from './types';

// Action to fetch the array of created users in the database
// Multi (Signup, Login)
/////////////////////////////////////////////////
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
// Single (Signup)
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
// Single (Login)
////////////////////////////////////////////////////
// export const loginUser = (user) => dispatch => {
//   localStorage.setItem("user", JSON.stringify(user));
//   window.location.href = '/';
// }


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


export const setCurrentUser = (userData) => ({
  type: SET_CURRENT_USER,
  payload: userData
})

export const failedLogin = (errorMsg) => ({
  type: FAILED_LOGIN,
  payload: errorMsg
})


// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })
// export const authenticatingUser = () => {
//   return { type: 'AUTHENTICATING_USER' }
// }

export const logOut = () => {
  localStorage.removeItem('jwt')
  return {type: LOGOUT_USER}
}

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

// Action to revert local storage to 'none' when user logs out
// Single (NavBar)
//////////////////////////////////////////////////////////////
// export const logoutUser = (user) => dispatch => {
//   localStorage.setItem("user", "none");
//   window.location.href = '/';
// }
