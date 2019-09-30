import React, { Component } from 'react';
import { fetchUsers, loginUser } from '../actions/userAction.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Login extends Component {

  state = {
    username: ""
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginSubmit = (e) => {
    e.preventDefault()
    const loginUser = this.props.usersArray.find(user => {
      return user.username === this.state.username
    })
    if (loginUser) {
      this.props.loginUser(loginUser)
    }
    else {
      alert("Username is invalid.")
    }
  }

  render() {
    return(
      <div className="login-outter">
        <div className="login-inner">
          <form onSubmit={this.loginSubmit}>
            <h1>Login</h1>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} type="text" className="form-control" name="username" placeholder="Username" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Sign in</button>
              </div>
            </div>
          </form>
          <a href="/signup">New user? Click here to sign-up!</a>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  usersArray: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  usersArray: state.users.users
})

export default connect(mapStateToProps, { fetchUsers, loginUser })(Login)
