import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      errors: ''
     };
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

    handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };

    handleSubmit = (event) => {
      event.preventDefault()
      const {username, email, password} = this.state
        let user = {
        username: username,
        email: email,
        password: password
      }

      axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
      this.props.history.push('/')
    }

    handleErrors = () => {
      return (
        <div>
          <ul>
          {
            this.state.errors.map(error => {
              return <li key={error}>{error}</li>
            })
          }
          </ul>
        </div>
      )
    }

    render() {

      const {username, email, password} = this.state

      return (
            <div className='card text-center shadow'>
              <h1>Log In</h1>
              <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  placeholder="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                />
                </div>
              <div className="form-group">
                <input
                  placeholder="email"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  placeholder="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button className="btn btn-outline-success" placeholder="submit" type="submit">
                  Log In
                </button>
              </div>

              <div>
                Not yet a user? <Link to='/signup'>sign up</Link>
              </div>
                
              </form>
              <div>
                {
                  this.state.errors ? this.handleErrors() : null
                }
              </div>
            </div>
          );
    }
}
export default Login;