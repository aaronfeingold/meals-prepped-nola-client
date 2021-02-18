import React from 'react'
import MealForm from './MealForm'
import UpdateMealButton from '../Buttons/UpdateMealButton'

const MealFormUpdating = (props) => {

    return (
      <form onSubmit={props.handleOnUpdate}>
        <div className='card text-center shadow' >
          <MealForm 
            handleOnUpdate={props.handleOnUpdate}
            handleOnChange={props.handleOnChange}
            handleOnSelect={props.handleOnSelect}
            name={props.name} 
            editing={props.editing} 
            category={props.category} 
            description={props.description} 
            image={props.image} 
            vegan={props.vegan}
            id={props.id}
            errors={props.errors} 
          />
          <UpdateMealButton />
        </div>
      </form>
    )
}

export default MealFormUpdating

