import React, { Component } from 'react'

export class MealDescription extends Component {
  render() {
    return (
      <div>
        <p className="card-text text-secondary">
          Description: {this.props.description}
        </p>
          <p className="card-text text-secondary">
            {this.props.vegan ? "Vegan" : " "}
          </p>
          <p className="card-text text-secondary">
            {this.props.contains_nuts ? "Contains Nuts" : " "}
          </p>
          <p className="card-text text-secondary">
            {this.props.contains_dairy ? "Contains Dairy" : " "}
          </p>
      </div>
    )
  }
}

export default MealDescription
