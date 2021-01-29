import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createMeal, updateMeal } from '../../actions/mealsActions.js'


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
    } if (this.state.vegan === true) {
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
            <form onSubmit={this.handleOnUpdate}>
            <div className='card text-center shadow' >
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                  <input type="text"  value={this.state.name} name="name" id="name" className="form-control" onChange={(event) => this.handleOnChange(event)} />
                <div className="errorMsg">{this.state.errors.name}</div>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category: </label>
                <input type="text" value={this.state.category} name="category" id="category" className="form-control" onChange={(event) => this.handleOnChange(event)} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description: </label>
                <textarea value={this.state.description} className="form-control" name="description"id="description" rows="3" onChange={(event) => this.handleOnChange(event)}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image URL: </label>
                  <input type="text"  value={this.state.image} name="image" id="image" className="form-control" onChange={(event) => this.handleOnChange(event)} />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" value={this.state.vegan} className="form-check-input" name="vegan" id="vegan" onChange={(event) => this.handleOnSelect(event)} />
                <label className="form-check-label" >Vegan</label>
              </div>
                <div>
                  <button type="submit" value="Update Meal" className="btn btn-outline-success btn-lg"> Update </button>
                </div>
            </div>
          </form>
          )
        } else {  
        return (
          <form onSubmit={this.handleOnCreate}>
            <div className='card text-center shadow' >
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                  <input type="text"  value={this.state.name} name="name" id="name" className="form-control" onChange={(event) => this.handleOnChange(event)} />
                <div className="errorMsg">{this.state.errors.name}</div>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category: </label>
                <input type="text" value={this.state.category} name="category" id="category" className="form-control" onChange={(event) => this.handleOnChange(event)} />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description: </label>
                <textarea value={this.state.description} className="form-control" name="description"id="description" rows="3" onChange={(event) => this.handleOnChange(event)}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="image">Image URL: </label>
                  <input type="text"  value={this.state.image} name="image" id="image" className="form-control" onChange={(event) => this.handleOnChange(event)} />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" value={this.state.vegan} className="form-check-input" name="vegan" id="vegan" onChange={(event) => this.handleOnSelect(event)} />
                <label className="form-check-label" >Vegan</label>
              </div>
                <div>
                <button type="submit" value="Create Meal" className="btn btn-outline-success btn-lg"> Create </button>
                </div>
            </div>
          </form>
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