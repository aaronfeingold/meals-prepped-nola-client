const BASE_URL = "http://localhost:3001";

const LOADING = { type: "LOADING" };

const addMeal = (meal) => {
  return {
      type: "ADD_MEAL",
      meal
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
      fetch('http://localhost:3001/meals', {
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