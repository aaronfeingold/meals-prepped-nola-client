import React, { Component, useRef } from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux'
import DeleteMealButton from '../Buttons/DeleteMealButton.js'
import MealDescription from './MealDescription.js'
import MealFormContainer from '../../containers/MealFormContainer.js'
import { setEditing } from '../../actions/mealsActions.js'
import './card-style.css'


export class MealCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  handleEditing = () => {
    let num = this.props.id
    document.getElementById(num).scrollIntoView()
    this.setState ({
      editing: true
    })
  }
  handleEditingChange = () => {
    let num = this.props.id
    document.getElementById(num).scrollIntoView()
    this.setState ({
      editing: false
    })
  }
  
  render() {
    if (this.state.editing) {
      return (
        <div className='card text-center shadow'>
                < MealFormContainer
                onEditingChange={this.handleEditingChange}
                editing={this.state.editing}
                name={this.props.name} 
                category={this.props.category} 
                description={this.props.description} 
                image={this.props.imgsrc} 
                vegan={this.props.vegan}
                id={this.props.id}
                />
        </div>
      )
    }
    return(
      <div className='card text-center shadow'>
        <div className="overflow">
          <img src={this.props.imgsrc} alt={`${this.props.name}`} className="card-img-top"/>
        </div>
        <div className="card-body text-dark">
          <MealDescription 
            name={this.props.name}
            category={this.props.category}
            description={this.props.description} 
            vegan={this.props.vegan}
            nuts={this.props.contains_nuts}
            dailry={this.props.contains_dairy}
            />
          <DeleteMealButton  deleteMeal={this.props.deleteMeal} id={this.props.id}/>
          <button className="btn btn-outline-info" onClick={this.handleEditing}> Edit </button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { setEditing })(MealCard));