import React, { Component } from 'react'
import axios from 'axios'
import Login from '../components/Login/Login.js'

export class LoginContainer extends Component {

  constructor(props) {
    super(props)
  }
  // if not logged in, login container
  // otherwise, show WeeklyPlanCard

  // when component mounts
  // query app state is_logged_in is queried
  // if it comes back true
  // componentDidMount() {
  //   debugger;
  // }

  render() {

      return (
        <div className="container">
          <div>
            <Login handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
          </div>
        </div>
      )
    }
}


export default LoginContainer