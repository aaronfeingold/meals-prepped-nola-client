import React from 'react'
import MealForm from './MealForm'
import CreateMealButton from '../Buttons/CreateMealButton'

const MealFormCreating = (props) => {
  
    return (
      <form onSubmit={props.handleOnCreate}>
        <div className='card text-center shadow' >
          <MealForm
            handleOnCreate={props.handleOnCreate}
            handleOnChange={props.handleOnChange}
            handleOnSelect={props.handleOnSelect}
            name={props.name} 
            editing={props.editing} 
            name={props.name} 
            category={props.category} 
            description={props.description} 
            image={props.image} 
            vegan={props.vegan}
            id={props.id}
            errors={props.errors} 
          />
          <CreateMealButton handleOnCreate={props.handleOnCreate} />
        </div>
      </form>
    )
}

export default MealFormCreating

