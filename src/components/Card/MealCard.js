import React, { Component } from "react";
import DeleteMealButton from "../Buttons/DeleteMealButton.js";
import EditMealButton from "../Buttons/EditMealButton";
import MealDescription from "./MealDescription.js";
import MealFormContainer from "../../containers/MealFormContainer.js";
import "./card-style.css";

// meal cards pass down handleEditing and onUpdateSubmit as props
// it can handle updating and submiting a patch
export class MealCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  };

  handleEditing = () => {
    let num = this.props.id;
    document.getElementById(num).scrollIntoView({ behavior: "smooth" });
    this.setState({
      editing: true,
    });
  };

  handleUpdateSubmit = () => {
    let num = this.props.id;
    document.getElementById(num).scrollIntoView({ behavior: "smooth" });
    this.setState({
      editing: false,
    });
  };

  render() {
    if (this.state.editing) {
      return (
        <div className="card text-center shadow">
          <MealFormContainer
            onUpdateSubmit={this.handleUpdateSubmit}
            editing={this.state.editing}
            name={this.props.name}
            category={this.props.category}
            description={this.props.description}
            image={this.props.imgsrc}
            vegan={this.props.vegan}
            id={this.props.id}
          />
        </div>
      );
    }
    return (
      <div className="card text-center shadow">
        <div className="overflow">
          <img
            src={this.props.imgsrc}
            alt={`${this.props.name}`}
            className="card-img-top"
          />
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
          <DeleteMealButton
            deleteMeal={this.props.deleteMeal}
            id={this.props.id}
          />
          <EditMealButton handleEditing={this.handleEditing} />
        </div>
      </div>
    );
  }
}

export default MealCard;
