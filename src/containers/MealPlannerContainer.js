import React, { Component } from 'react'
import WeeklyPlanCard from '../components/Card/WeeklyPlanCard.js'

export class MealPlannerContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {

      return (
        <div className="container">
          <div>
            <WeeklyPlanCard />
          </div>
        </div>
      )
    }
}


export default MealPlannerContainer

