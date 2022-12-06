import React from "react";

const MealDescription = (props) => {
  return (
    <div>
      <h4 className="card-title">{props.name}</h4>
      <h5 className="card-title">{props.category}</h5>
      <p className="card-text text-secondary">
        Description: {props.description}
      </p>
      <p className="card-text text-secondary">{props.vegan ? "Vegan" : " "}</p>
      <p className="card-text text-secondary">
        {props.contains_nuts ? "Contains Nuts" : " "}
      </p>
      <p className="card-text text-secondary">
        {props.contains_dairy ? "Contains Dairy" : " "}
      </p>
    </div>
  );
};

export default MealDescription;
