
import React, { Component } from 'react'
import MealInput from '../components/Forms/MealInput';


class MealFormContainer extends Component {
  render() {
    const header = () => {
      
        return (
          <div>
            <h3>Please Edit</h3>
          </div>
        )
      
    }
    return (
      <div className="container">
        <div>
          {header}
        </div>

        <MealInput 
          editing={this.props.editing} 
          name={this.props.name} 
          category={this.props.category} 
          description={this.props.description} 
          image={this.props.image} 
          vegan={this.props.vegan} 
        />
      </div>
    )
  }
}

export default MealFormContainer 