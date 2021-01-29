const BASE_URL = "http://localhost:3001";

const LOADING = { type: "LOADING" };

const addMeal = (meal) => {
  console.log('e')
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

const updateMealFromMeals = (mealId) => {
  return {
    type: "UPDATE_MEAL",
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
  console.log('b')
  return (dispatch) => {
    console.log('c')
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
              console.log('d')
              dispatch(addMeal(meal));
              history.push('/meals');
          })
        console.log('f')
  }
}

export const updateMeal = (mealId) => {

}

export const deleteMeal = (mealId) => {
  return (dispatch) => {
      fetch(BASE_URL + '/meals/' + mealId, {
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