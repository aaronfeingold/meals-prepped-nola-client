import React from 'react'

const UpdateMealButton = props => {


    return (
      <div>
        <button onClick={props.handleOnUpdate} className="btn btn-outline-success"> Update </button>
      </div>
    )

}

export default UpdateMealButton;