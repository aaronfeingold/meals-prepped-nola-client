import React from 'react';
import './card-style.css'

const MealCard = props => {
  return(
    <div className='card text-center shadow' key={props.key}>
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">
         {props.name}
        </h4>
        <h5 className="card-title">
          {props.category}
        </h5>
        <p className="card-text text-secondary">
          Description: {props.description}
        </p>
        <p className="card-text text-secondary">
          Vegan?: {`${props.vegan ? true:true}` || `${props.vegan ? false:false}`}
        </p>
        <p className="card-text text-secondary">
          Contains Nuts?: {props.contains_nuts}
        </p>
        <p className="card-text text-secondary">
          Contains Dairy?: {props.contains_dairy}
        </p>
        <a href="#" className="btn btn-outline-success">
          Add to Order
        </a>
      </div>
    </div>
  );
}

export default MealCard;