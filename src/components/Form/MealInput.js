import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import { createMeal } from '../.././actions/meals.js'

export class MealInput extends Component {
    state = {
      name: "",
      category: "",
      description: "",
      vegan: false,
      image: ""
    }
  
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    handleOnSelect(e) {
      if (this.state.vegan = false) {
        this.setState({
          [e.target.name]: true
      })
    } if (this.state.vegan = true) {
        this.setState({
          [e.target.name]: false
        })
      }
    }
  
    handleOnSubmit(e) {
      e.preventDefault();
      const mealData = {
        meal: this.state
      };

      this.props.createMeal(mealData, this.props.history);
    };
  
    render() {
      return (
          <form onSubmit={this.handleOnSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
                <input type="text"  value={this.state.name} name="name" id="name" className="form-control" onChange={(event) => this.handleOnChange(event)} />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category: </label>
              <input type="text" value={this.state.category} name="category" id="category" className="form-control" onChange={(event) => this.handleOnChange(event)} />
            </div>
            <div class="form-group">
              <label htmlFor="description">Description: </label>
              <textarea value={this.state.description} className="form-control" name="description"id="description" rows="3" onChange={(event) => this.handleOnChange(event)}></textarea>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" value={this.state.vegan} className="form-check-input" name="vegan" id="vegan" onChange={(event) => this.handleOnSelect(event)} />
              <label className="form-check-label" >Vegan</label>
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL: </label>
                <input type="text"  value={this.state.image} name="image" id="image" className="form-control" onChange={(event) => this.handleOnChange(event)} />
            </div>
              <button type="submit" value="Create Meal" className="btn btn-primary btn-lg">Create Meal</button>
          </form>
      );
    };
};

export default withRouter(connect(null, { createMeal })(MealInput));