import React, { Component } from 'react'
import MealCard from '../components/Card/MealCard';
import { connect } from 'react-redux'

import cuid from 'cuid';
export const cuidFn = cuid;

class MealsListContainer extends Component {
// whos powers include an essential constant yin-yang with meals and mealFilter
  constructor(props) {
    super(props)
    this.state = {
      mealFilter: ""
    }
  }

  handleSearch = (e) => {
    debugger;
    this.setState({
      mealFilter: e.target.value
    })

  }

  // this is functional, yes, but not DRY...
  queryMeals = () => {
    let findAlike = this.state.mealFilter.toLowerCase()
    return this.props.meals.filter ((meal) => 
      meal.name.toLowerCase().includes(findAlike) || meal.description.toLowerCase().includes(findAlike) || meal.category.toLowerCase().includes(findAlike)
    ).sort(function(a,b){return (a.id - b.id)})
  }

  render () {
    if (this.props.loading) {
        return <div className="container">Loading info from backend server...this can take up to 30 seconds...</div>
      }
    else {
      const mealsList = this.queryMeals().map ((meal) => {
        return (
      // many children - when editing from meal card, this is parent to meal form container, hence ability to call onEditingChange
          <div className="col-md-4" id={meal.id}>
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
              <div className='card text-center shadow' >
                <label htmlFor="Search">Search by Name: </label>
                <input type="text" id="filter" value={this.state.mealFilter} onChange={this.handleSearch} />
              </div>
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
  deleteMeal: id => dispatch ({type: "DELETE_MEAL", id})
})

const mapStateToProps = state => {
  return {
      meals: state.mealsReducer.meals,
      loading: state.mealsReducer.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealsListContainer);