import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createMeal } from '../../actions/mealsActions.js'

const CreateMealButton = props => {

  function handleOnClick() {
   props.createMeal(props.id, props.history)
  }


    return (
      <div>
        <button onClick={handleOnClick} className="btn btn-outline-danger"> Create</button>
      </div>
    )

}

export default withRouter(connect(null, { createMeal })(CreateMealButton));