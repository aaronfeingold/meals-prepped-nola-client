import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createMeal, updateMeal } from '../../actions/mealsActions.js'
import  MealFormUpdating  from './MealFormUpdating'
import MealFormCreating from './MealFormCreating'


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
  
    handleOnCreate = (e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const mealData = {
          meal: this.state
        };
        console.log('a')
        this.props.createMeal(mealData, this.props.history);
        console.log('h')}
      };

    handleOnUpdate =(e) => {
      e.preventDefault();
      if (this.validateForm()) {
        const mealData = {
          meal: this.state
        };
        console.log('a')
        this.setState({
          editing: false
        })
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
              name={this.state.name} 
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
              name={this.state.name} 
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