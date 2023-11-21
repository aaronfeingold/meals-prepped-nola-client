import React from "react";
import MealForm from "./MealForm";
import MealButton from "../Buttons/MealButton";

const MealFormContainer = (props) => {
    return (
        <form onSubmit={props.handleOnCreate}>
            <div className="card text-center shadow">
                <MealForm
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
                <MealButton
                    handleOnClick={props.isEditing ? props.handleOnUpdate : props.handleOnCreate}
                    isEditing={props.isEditing}
                />
            </div>
        </form>
    );
};

export default MealFormContainer;
