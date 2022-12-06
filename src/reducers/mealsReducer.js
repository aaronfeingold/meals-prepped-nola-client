const initialState = {
  loading: true,
  meals: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "LOAD_MEALS":
      return { ...state, loading: false, meals: action.meals };
    case "ADD_MEAL":
      console.log("h");
      return { ...state, loading: false, meals: [...state.meals, action.meal] };
    case "DELETE_MEAL":
      const filteredMeals = state.meals.filter(
        (meal) => meal.id !== action.mealId
      );
      return { ...state, meals: filteredMeals };
    case "UPDATE_MEAL":
      console.log("h");
      console.log(action.updatedMeal);
      let updatedMeal = action.updatedMeal;
      let reFilteredMeals = state.meals.filter(
        (meal) => meal.id !== updatedMeal.id
      );
      reFilteredMeals.push(action.updatedMeal);
      return { ...state, meals: reFilteredMeals };
    default:
      return state;
  }
};
