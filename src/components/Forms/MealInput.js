import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { createMeal, updateMeal } from "../../actions/mealsActions.js";
import MealFormContainer from "./MealFormContainer.js";

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
            isEditing: props.editing || false,
        };
    };

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

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

    render() {
        this.handleOnUpdate.bind(this)

        return (
            <MealFormContainer
                isEditing={this.state.isEditing}
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
