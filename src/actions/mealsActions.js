const BASE_URL = "https://meals-prepped-backend.herokuapp.com";

const LOADING = { type: "LOADING" };

const addMeal = (meal) => ({
  type: "ADD_MEAL",
  meal,
});

const updateMealCard = (updatedMeal) => ({
  type: "UPDATE_MEAL",
  updatedMeal,
});

const deleteMealFromMeals = (mealId) => {
  return {
    type: "DELETE_MEAL",
    mealId,
  };
};

export const fetchMeals = () => {
  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/meals")
      .then((resp) => resp.json())
      .then((meals) => dispatch({ type: "LOAD_MEALS", meals }));
  };
};

export const createMeal = (mealData, history) => {
  return (dispatch) => {
    fetch(BASE_URL + "/meals", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mealData),
    })
      .then((resp) => resp.json())
      .then((meal) => {
        dispatch(addMeal(meal));
        history.push("/meals");
      });
  };
};

export const updateMeal = (mealId, tempMeal) => {
  return (dispatch) => {
    fetch(BASE_URL + "/meals/" + `${mealId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tempMeal),
    })
      .then((resp) => resp.json())
      .then((updatedMeal) => {
        dispatch(updateMealCard(updatedMeal));
      });
  };
};

export const deleteMeal = (mealId) => {
  return (dispatch) => {
    fetch(BASE_URL + "/meals/" + mealId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((resp) => {
      if (resp.error) {
        alert(resp.error);
      } else {
        dispatch(deleteMealFromMeals(mealId));
      }
    });
  };
};
