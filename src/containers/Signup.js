import React, { Component } from 'react';
import { fetchUsers, loginUser, createUser } from '../actions/userAction.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Signup extends Component {

  state = {
    username: "",
    email: ""
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  signupSubmit = (e) => {
    e.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
    }
    const signupName = this.props.usersArray.find(user => {
      return user.username === this.state.username
    })
    if (!signupName) {
      this.props.createUser(user)
    }
    else {
      alert("Username is taken.")
    }
  }

  render() {
    return (
      <div className="login-outter">
        <div className="login-inner">
          <form onSubmit={this.signupSubmit}>
            <h1>Signup</h1>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Username</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="username" type="text" className="form-control" id="inputusername" placeholder="Username" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input onChange={this.handleChange} name="email" type="text" className="form-control" id="inputemail" placeholder="Email" />
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
  fetchUsers: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  createUser: PropTypes.func.isRequired,
  usersArray: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  usersArray: state.users.users
})

export default connect(mapStateToProps, { loginUser, fetchUsers, createUser })(Signup)
