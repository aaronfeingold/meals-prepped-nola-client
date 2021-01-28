import React, { Component } from 'react'
import MealCard from '../components/Card/MealCard';
import { connect } from 'react-redux'

import cuid from 'cuid';
export const cuidFn = cuid;

class MealsListContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mealFilter: ""
    }
  }

  handleSearch = (e) => {
    this.setState({
      mealFilter: e.target.value
    })

  }

  filterMeals = () => {
    let filteredMeal = this.state.mealFilter.toLowerCase()
    return this.props.meals.filter ((meal) => 
      meal.name.toLowerCase().includes(filteredMeal) || meal.description.toLowerCase().includes(filteredMeal)
    )
  }

  render () {
    if (this.props.loading) {
        return <div>Loading info from backend server...</div>
      }
    else {
      const mealsList = this.filterMeals().map ((meal) => {
        return (

          <div className="col-md-4">
            <MealCard 
            key={meal.id}
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
            <div className="container-fluid d-flex justify-content-center" >
              <label htmlFor="name">Search by Name: </label> 
              <input type="text" id="filter" value={this.state.mealFilter} onChange={this.handleSearch} />
            </div>
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
  deleteMeal: id => dispatch ({type: "DELETE_MEAL", id}),
  updateMeal: id => dispatch ({tyep: "UPDATE_MEAL", id})
})

const mapStateToProps = state => {
  return {
      meals: state.mealsReducer.meals,
      loading: state.mealsReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsListContainer);