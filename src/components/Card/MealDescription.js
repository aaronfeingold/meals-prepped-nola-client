import React, { Component } from 'react'

export class MealDescription extends Component {
  render() {
    return (
      <div>
        <p className="card-text text-secondary">
          Description: {this.props.description}
        </p>
      </div>
    )
  }
}

export default MealDescription
