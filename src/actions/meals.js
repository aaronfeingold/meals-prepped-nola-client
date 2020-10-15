
const BASE_URL = "http://localhost:3001";

const LOADING = { type: "LOADING" };

export const fetchMeals = () => {

  return (dispatch) => {
    dispatch(LOADING);

    fetch(BASE_URL + "/meals")
      .then((resp) => resp.json())

      .then((meals) => dispatch({ type: "LOAD_MEALS", meals }));
  };
}