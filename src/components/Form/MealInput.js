import React, { Component } from 'react'
import { connect } from 'react-redux'

export class MealInput extends Component {
    state = {
      name: '',
      category: ''
    }
  
    handleOnChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  
    handleOnSubmit(e) {
      e.preventDefault();
      this.props.addMeal(this.state);
      this.setState({
        name: '',
        category: ''
      });
    }
  
    render() {
      return (
          <form onSubmit={this.handleOnSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" className="form-control" value={this.state.name} onChange={this.handleOnChange} />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category: </label>
              <input type="text" value={this.state.category} name="category" className="form-control" onChange={this.handleOnChange} />
            </div>
              <button type="submit" className="btn btn-primary btn-lg">Create Meal</button>
          </form>
      );
    };
};

const mapStateToProps = ({ meals }) => ({ meals })

const mapDispatchToProps = dispatch => ({ addMeal: meal => dispatch({ type: 'ADD_MEAL', meal }) })

export default connect(mapStateToProps, mapDispatchToProps)(MealInput)