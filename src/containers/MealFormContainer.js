
import React, { Component } from 'react'
import MealInput from '../components/Forms/MealInput';


class MealFormContainer extends Component {
  render() {
    return (
      <div className="container">
        <h3>Add Meal</h3>
        <MealInput />
      </div>
    )
  }
}

export default MealFormContainer 