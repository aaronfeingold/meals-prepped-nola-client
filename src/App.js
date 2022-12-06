import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/HomePage/Home.js";
import MealsListContainer from "./containers/MealsListContainer.js";
import MealFormContainer from "./containers/MealFormContainer.js";
import MealPlannerContainer from "./containers/MealPlannerContainer.js";
import { fetchMeals } from "./actions/mealsActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchMeals();
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meals" component={MealsListContainer} />
          <Route exact path="/meals/new" component={MealFormContainer} />
          <Route exact path="/meals/planner" component={MealPlannerContainer} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect(null, { fetchMeals })(App);
