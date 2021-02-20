import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.js'
import Home from './components/HomePage/Home.js'
import MealsListContainer from './containers/MealsListContainer.js'
import MealFormContainer from './containers/MealFormContainer.js'
import MealPlannerContainer from './containers/MealPlannerContainer.js'
import LoginContainer from './containers/LoginContainer.js'
import SignUpContainer from './containers/SignUpContainer.js'
import { fetchMeals } from './actions/mealsActions';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

    componentDidMount(){
      this.loginStatus();
      this.props.fetchMeals();
    }
    
    loginStatus = () => {
      axios.get('http://127.0.0.1:3001/users', 
      {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.handleLogin(response)
        } else {
          this.handleLogout()
        }
      })
      .catch(error => console.log('api errors:', error))
    }
  
    handleLogin = (data) => {
      this.setState({
        isLoggedIn: true,
        user: data.user
      })
    }
  
    handleLogout = () => {
      this.setState({
      isLoggedIn: false,
      user: {}
      })
    }

    render() {
      return (
        <Router >
          <Navbar loggedIn={this.state.isLoggedIn}/>
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/meals' component={MealsListContainer}/>
            <Route exact path='/meals/new' component={MealFormContainer}/>
            <Route exact path='/login' render={props => (<LoginContainer {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
            <Route exact path='/signup' render={props => (<SignUpContainer {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)}/>
            <Route exact path='/weekly_planner' component={MealPlannerContainer}/>
          </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default connect(null, { fetchMeals })(App);
