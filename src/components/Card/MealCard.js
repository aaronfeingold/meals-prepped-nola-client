import React, { Component } from 'react'
import DeleteMealButton from '../Buttons/DeleteMealButton.js'
import MealDescription from './MealDescription.js'
import MealFormContainer from '../../containers/MealFormContainer.js'
import './card-style.css'


export class MealCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleEditing = (e) => {
    this.setState({
      editing: true
    })
  }

  render() {
    if (this.state.editing) {
      return (
        <div className='card text-center shadow' >
                < MealFormContainer 
                editing={this.state.editing} 
                name={this.props.name} 
                category={this.props.category} 
                description={this.props.description} 
                image={this.props.image} 
                vegan={this.props.vegan} 
                />
        </div>
      )
    }
    return(
      <div className='card text-center shadow' >
        <div className="overflow">
          <img src={this.props.imgsrc} alt={`${this.props.name}`} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">
          {this.props.name}
          </h4>
          <h5 className="card-title">
            {this.props.category}
          </h5>
          <MealDescription description={this.props.description} />
          <p className="card-text text-secondary">
            {this.props.vegan ? "Vegan" : " "}
          </p>
          <p className="card-text text-secondary">
            {this.props.contains_nuts ? "Contains Nuts" : " "}
          </p>
          <p className="card-text text-secondary">
            {this.props.contains_dairy ? "Contains Dairy" : " "}
          </p>
          <DeleteMealButton  deleteMeal={this.props.deleteMeal} id={this.props.id}/>
          <button className="btn btn-outline-info" onClick={this.handleEditing}> Edit </button>
        </div>
      </div>
    );
  }
}

export default MealCard;