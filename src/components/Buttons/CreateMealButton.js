import React from 'react'

const CreateMealButton = props => {

    return (
      <div>
        <button onClick={props.handleOnCreate} className="btn btn-outline-primary"> Create </button>
      </div>
    )

}

export default CreateMealButton;