import React, { Component } from 'react';
import { loginUser } from '../actions/userAction.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loginSubmit = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state.username, this.state.password)
    this.setState({ username: '', password: '' })
  }

  render() {

    return this.props.loggedIn ? <Redirect to="/" /> : (
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
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} type="password" className="form-control" name="password" placeholder="Password" />
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
  loginUser: PropTypes.func.isRequired,
  usersArray: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  authenticatingUser: state.users.authenticatingUser,
  failedLogin: state.users.failedLogin,
  error: state.users.error,
  loggedIn: state.users.loggedIn,
  user: state.users.user
})

export default withRouter(connect(mapStateToProps, { loginUser })(Login))
