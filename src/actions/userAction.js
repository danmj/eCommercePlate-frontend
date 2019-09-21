import { FETCH_USERS } from './types';

// Action to fetch the array of created users in the database
// Multi (Signup, Login)
export const fetchUsers = () => dispatch => {
  fetch('http://localhost:3000/api/v1/users/')
    .then(res => res.json())
    .then(userjson => {
      dispatch({
        type: FETCH_USERS,
        payload: userjson
      })
    })
}

// Action to POST a newly signed up user
// Single (Signup)
export const createUser = (user) => dispatch => {
  fetch(`http://localhost:3000/api/v1/users`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
  window.location.href = '/login';
}

// Action to set local storage to the logged in user
// Single (Login)
export const loginUser = (user) => dispatch => {
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = '/';
}

// Action to revert local storage to 'none' when user logs out
// Single (NavBar)
export const logoutUser = (user) => dispatch => {
  localStorage.setItem("user", "none");
  window.location.href = '/';
}
