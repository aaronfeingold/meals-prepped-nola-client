import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  loading: true,
  meals: []
};

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true};
    case "LOAD_MEALS":
      return {...state, loading: false, meals: action.meals};
    case "ADD_MEAL":
      return {...state, loading: false, meals: [...state.meals, action.meal]};
    case "DELETE_MEAL":
      const filteredMeals = state.meals.filter(meal => meal.id !== action.mealId)
      return { ...state, meals: filteredMeals}
    default:
      return state;
  };
};