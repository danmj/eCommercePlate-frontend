import React, { Component } from 'react';
import { signupUser } from '../actions/userAction.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';

class Signup extends Component {

  state = {
    name: "",
    username: "",
    password: "",
    confirmpassword: "",
    isSignedUp: false
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signupSubmit = (e) => {
    e.preventDefault()
    if (this.state.password === this.state.confirmpassword) {
      this.props.signupUser(this.state.name, this.state.username, this.state.password)
      this.setState({ username: "", password: "", confirmpassword: "" })
    }
    else {
      alert("Passwords do not match")
    }
  }

  render() {
      return this.props.loggedIn ? <Redirect to="/" /> : (
      <div className="login-outter">
        <div className="login-inner">
          <form onSubmit={this.signupSubmit}>
            <h1>Signup</h1>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="name" type="text" className="form-control" id="inputname" placeholder="Your name" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="username" type="text" className="form-control" id="inputusername" placeholder="Username" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="password" type="password" className="form-control" id="inputpassword" placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Confirm password</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="confirmpassword" type="password" className="form-control" id="inputconfirmpassword" placeholder="Password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Create account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

Signup.propTypes = {
  signupUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  authenticatingUser: state.users.authenticatingUser,
  failedLogin: state.users.failedLogin,
  error: state.users.error,
  loggedIn: state.users.loggedIn
})

export default withRouter(connect(mapStateToProps, { signupUser })(Signup))
