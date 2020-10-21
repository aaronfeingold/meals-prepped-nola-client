import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteMeal } from '../.././actions/meals.js'

export class DeleteButton extends Component {

  handleOnClick() {
    console.log(this)
    this.props.deleteMeal(this.props.id, this.props.history)
  }

  render() {

    return (
      <div>
        <button onClick={this.handleOnClick.bind(this)} className="btn btn-outline-success"> Delete</button>
      </div>
    )
  }
}

export default withRouter(connect(null, { deleteMeal })(DeleteButton));
