import React, { Component } from 'react'
import MealCard from '../components/Card/MealCard';
import { connect } from 'react-redux'

import cuid from 'cuid';
export const cuidFn = cuid;

class MealsListContainer extends Component {

  render () {
    if (this.props.loading) {
        return <div>Loading info from backend server...</div>
      } 
    else {
      const mealsList = this.props.meals.map ((meal) =>{
        return (

          <div className="col-md-4">
            <MealCard 
            key={cuidFn}
            id={meal.id}
            name={meal.name} 
            category={meal.category} 
            description={meal.description}
            imgsrc={meal.image}
            vegan={meal.vegan}
            contains_nuts={meal.contains_nuts}
            contains_dairy={meal.contains_dairy}
            />
          </div>
        )
      })

      return(
        <div>
          <span className="align-middle">
            <h1 className="text-center">All Meals</h1>
          </span>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              { mealsList }
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  deleteMeal: id => dispatch ({type: "DELETE_MEAL", id})
})

const mapStateToProps = state => {
  return {
      meals: state.mealsReducer.meals,
      loading: state.mealsReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsListContainer);