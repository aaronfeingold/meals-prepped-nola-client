import React, { Component } from 'react'
import MealCard from './CardUI';
import { connect } from 'react-redux'

// import breakfast from '../assets/breakfast.jpeg';
// import lunch from '../assets/lunch.jpeg';
// import dinner from '../assets/dinner.jpg';

class MealsList extends Component {
  render () {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {

      const meals = this.props.meals.map ((meal, i) =>{
        return (
          <div className="col-md-4">
            <MealCard key={i} 
            name={meal.name} 
            category={meal.category} 
            description={meal.description}
            imgsrc={meal.image}
            vegan={meal.vegan ? true: true || meal.vegan ? false: false}
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