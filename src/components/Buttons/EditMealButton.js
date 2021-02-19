import React from 'react'
import './button-style.css'

const editButton = (props) => {

  return (
    <div>
      <button className="btn btn-outline-info" onClick={props.handleEditing}> Edit </button>
    </div>
  )
}

export default editButton