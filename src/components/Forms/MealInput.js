import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createMeal, updateMeal } from '../../actions/mealsActions.js'
import MealFormUpdating from './MealFormUpdating'
import MealFormCreating from './MealFormCreating'
// This input is for meal creating and update. deletion is handled by deleteMealButton

export class MealInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name || "",
      category: props.category ||"",
      description: props.description || "",
      vegan: props.vegan || false,
      image: props.image || "",
      errors: {}, 
      editing: props.editing || false
    }
  } 
   
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleOnSelect(e) {
      // a poorly abstracted toggle. however, it suffices. 
      // Yet, if there are many checkboxes, 
      // do I need to do it for each case? 
      // Yes, so I need to make this dynamic...
      if (this.state.vegan === false) {
        this.setState({
          vegan: true
      })
    } else {
        this.setState(
        {
          vegan: false
        })
      }
    }
    
    // console logging here to make sure asyc react is correct...
    // handles creation of new object, dispatches to backend...
    handleOnCreate = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const mealData = {
          meal: tempState
        };
        console.log('a')
        this.props.createMeal(mealData, this.props.history);
        console.log('h')}
      };
    // these two look earily similar, thus can be refactored into one.
    // how exactly--will it require changing a lot of props now, and variables...
    
    handleOnUpdate =(e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const tempState = {...this.state};
        delete tempState.errors;
        delete tempState.editing;
        const mealData = {
          meal: tempState
        };
        console.log('a')
        this.setState({
          editing: false
        })
        // onEdingChange is passed down from MealCard as Parent
        // this is double to ensure that editing is no longer true in any state anywhere in application
        this.props.onEditingChange();
        this.props.updateMeal(this.props.id, mealData);
        console.log('h')}
      };

      
    render() { 
        if (this.state.editing === true ) {
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
          )
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
      };
    }

    validateForm = () => {
    
      let formIsValid = true
      let errors = {}
    
    if (!this.state.name) {
      formIsValid = false
      errors['name'] = '*Please enter a name for this meal'
    }
    
    this.setState({ errors })
    
    return formIsValid
    }
};


export default withRouter(connect(null, { createMeal, updateMeal })(MealInput));