import React, { Component } from 'react'
import MealCard from '.././components/Card/MealCard';
import { connect } from 'react-redux'

class MealsList extends Component {
  render () {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {

      const meals = this.props.meals.map ((meal, i) =>{
        return (
          <div className="col-md-4">
            <MealCard 
            key={meal.id} 
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
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            { meals }
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      meals: state.mealsReducer.meals,
      loading: state.mealsReducer.loading
  }
}

export default connect(mapStateToProps)(MealsList);