import React, { Component } from 'react'
import SignUp from '../components/SignUp/SignUp.js'

export class SignUpContainer extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {

      return (
        <div className="container">
          <div>
            <SignUp handleLogin={this.props.handleLogin} loggedInStatus={this.props.isLoggedIn}/>
          </div>
        </div>
      )
    }
}


export default SignUpContainer