// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://meals-prepped-backend.herokuapp.com/";

const LOADING = { type: "LOADING" };
const SET_EDITING = { type: "SET_EDITING" };

const addMeal = (meal) => {
  console.log('e')
  return {
      type: "ADD_MEAL",
      meal
  }
}

const updateMealCard = (mealId) => {
  return{
    type: "UPDATE_MEAL",
    mealId
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

export const setEditing = () => {
  return (dispatch) => {
    console.log("editing")
    dispatch(SET_EDITING)
  };
}

export const updateMeal = (mealId, mealData) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
      fetch(BASE_URL + "/meals/" + `${mealId}`, {
          method: "PATCH",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(mealData)
      })
          .then( resp => resp.json() )
          .then( meal => {
              dispatch(updateMealCard(meal));
          })
        console.log('f')
  }

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