import React from "react";

const MealButton = (props) => {
    const label = props.isEditing ? "Update" : "Create"
    return (
        <div>
            <button
            onClick={props.handleOnClick}
            className="btn btn-outline-primary"
            >
            {label}
            </button>
        </div>
    );
};

export default MealButton;
