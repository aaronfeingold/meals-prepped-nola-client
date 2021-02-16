

const initialState = {
  loading: true,
  editing: false,
  meals: []
};

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "SET_EDITING":
      return {...state, editing: true}
    case "LOAD_MEALS":
      return {...state, loading: false, meals: action.meals};
    case "ADD_MEAL":
      return {...state, loading: false, meals: [...state.meals, action.meal]};
      case "DELETE_MEAL":
        const filteredMeals = state.meals.filter(meal => meal.id !== action.mealId)
        return { ...state, meals: filteredMeals }
      case "UPDATE_MEAL":
        console.log(action.mealId)
        let reFilteredMeals = state.meals.filter(meal => meal.id !== action.mealId.id)
        reFilteredMeals.push(action.mealId)
        return { ...state, meals: reFilteredMeals }
    default:
      return state;
  };
};