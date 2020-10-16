import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createMeal } from '../.././actions/meals.js'

export class MealInput extends Component {
    state = {
      name: '',
      category: ''
    }
  
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleOnSubmit(e) {
      e.preventDefault();
      const meal = {
        meal: this.state
      };

      this.props.createMeal(meal, this.props.history);
    };
  
    render() {
      return (
          <form onSubmit={this.handleOnSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
                <input type="text"  value={this.state.name} name="name" id="name" className="form-control" onChange={this.handleOnChange} />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category: </label>
              <input type="text" value={this.state.category} name="category" className="form-control" onChange={this.handleOnChange} />
            </div>
              <button type="submit" value="Create Meal" className="btn btn-primary btn-lg">Create Meal</button>
          </form>
      );
    };
};

// const mapStateToProps = ({ meals }) => ({ meals })

// const mapDispatchToProps = dispatch => ({ addMeal: formData => dispatch({ type: 'ADD_MEAL', formData }) })

export default connect(null, { createMeal })(MealInput)