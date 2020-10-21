const BASE_URL = "http://localhost:3001";

const LOADING = { type: "LOADING" };

const addMeal = (meal) => {
  return {
      type: "ADD_MEAL",
      meal
  }
}

const deleteMealFromMeals = (mealId) => {
  return {
    type: "DELETE_MEAL",
    mealId
  }
}

export const fetchMeals = () => {

  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/meals")
      .then((resp) => resp.json())
      .then((meals) => dispatch({ type: "LOAD_MEALS", meals }));
  };
}

export const createMeal = (mealData, history) => {
  return (dispatch) => {
      fetch(BASE_URL + "/meals", {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(mealData)
      })
          .then( resp => resp.json() )
          .then( meal => {
              dispatch(addMeal(meal));
              history.push('/meals');
          })
  }
}

export const deleteMeal = (mealId, history) => {
  return (dispatch) => {
      fetch(`http://localhost:3001/meals/${mealId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteMealFromMeals(mealId))
        }
      });
  };
};