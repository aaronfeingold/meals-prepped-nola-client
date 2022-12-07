import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createMeal, updateMeal } from "../../actions/mealsActions.js";
import MealFormUpdating from "./MealFormUpdating";
import MealFormCreating from "./MealFormCreating";

export class MealInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name || "",
      category: props.category || "",
      description: props.description || "",
      vegan: props.vegan || false,
      image: props.image || "",
      errors: {},
      editing: props.editing || false,
    };
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOnSelect(e) {
    e.preventDefault();
    let update = true;
    if (this.state.vegan === true) {
      update = false;
    }

    this.setState({
      vegan: update,
    });
  };

  handleOnCreate = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const tempState = { ...this.state };
      delete tempState.errors;
      delete tempState.editing;
      const mealData = {
        meal: tempState,
      };
      this.props.createMeal(mealData, this.props.history);
    }
  };

  handleOnUpdate = (e) => {
    debugger;
    e.preventDefault();
    if (this.validateForm()) {
      const tempState = { ...this.state };
      delete tempState.errors;
      delete tempState.editing;
      const tempMeal = {
        meal: tempState,
      };
      this.props.onUpdateSubmit();
      this.props.updateMeal(this.props.id, tempMeal);
    }
  };

  toggleComponent = (isEditing) => {
  this.handleOnUpdate.bind(this)
    if (isEditing) {
      return (
        <MealFormUpdating
          handleOnUpdate={this.handleOnUpdate.bind(this)}
          handleOnChange={this.handleOnChange.bind(this)}
          handleOnSelect={this.handleOnSelect.bind(this)}
          editing={this.state.editing}
          name={this.state.name}
          category={this.state.category}
          description={this.state.description}
          image={this.state.image}
          vegan={this.state.vegan}
          id={this.state.id}
          errors={this.state.errors}
        />
      );
    } else {
      return (
        <MealFormCreating
          handleOnCreate={this.handleOnCreate.bind(this)}
          handleOnChange={this.handleOnChange.bind(this)}
          handleOnSelect={this.handleOnSelect.bind(this)}
          editing={this.state.editing}
          name={this.state.name}
          category={this.state.category}
          description={this.state.description}
          image={this.state.image}
          vegan={this.state.vegan}
          id={this.state.id}
          errors={this.state.errors}
        />
      );
    }
  };

  render() {
    return this.toggleComponent(this.state.editing);
  }

  validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (!this.state.name) {
      formIsValid = false;
      errors["name"] = "*Please enter a name for this meal";
      document
        .querySelector("div.errorMsg")
        .parentNode.scrollIntoView({ behavior: "smooth" });
    }

    this.setState({ errors });
    return formIsValid;
  };
}

export default withRouter(connect(null, { createMeal, updateMeal })(MealInput));
