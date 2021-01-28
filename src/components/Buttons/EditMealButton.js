import React from 'react'

const EditMealButton = props => {

  return (
    <div>
      <button onClick={handleOnClick} className="btn btn-outline-danger"> Edit </button>
    </div>
  )

}

export default withRouter(connect(null, { deleteMeal })(DeleteMealButton));
