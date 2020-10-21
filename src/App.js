import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux'

import history from './history';

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer.js'
import Home from './components/HomePage/Home.js'
import MealsList from './containers/MealsList.js'
import MealFormContainer from './containers/MealFormContainer.js'
import { fetchMeals } from './actions/meals';

class App extends Component {

    componentDidMount(){
      this.props.fetchMeals();
    }

    render() {
      return (
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path='/'component={Home}/>
            <Route exact path='/meals' component={MealsList}/>
            <Route exact path='/meals/new' component={MealFormContainer}/>
            <Route path='/sign-up'  />
          </Switch>
          <Footer />
        </Router> 
      );
    } 
}

export default connect(null, { fetchMeals })(App);
