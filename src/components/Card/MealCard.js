import React from 'react';
import DeleteButton from '../Buttons/DeleteButton.js'
import MealDescription from './MealDescription.js'
import './card-style.css'


const MealCard = props => {

  return(
    <div className='card text-center shadow' >
      <div className="overflow">
        <img src={props.imgsrc} alt={`${props.name}`} className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">
         {props.name}
        </h4>
        <h5 className="card-title">
          {props.category}
        </h5>
        <MealDescription description={props.description} />
        <p className="card-text text-secondary">
          {props.vegan ? "Vegan" : " "}
        </p>
        <p className="card-text text-secondary">
          {props.contains_nuts ? "Contains Nuts" : " "}
        </p>
        <p className="card-text text-secondary">
          {props.contains_dairy ? "Contains Dairy" : " "}
        </p>
        <DeleteButton  deleteMeal={props.deleteMeal} id={props.id}/>
      </div>
    </div>
  );
}

export default MealCard;