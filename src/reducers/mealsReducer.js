const initialState = {
  loading: true,
  meals: []
}

export default (state=initialState, action) => {
  switch(action.type){
    case "LOADING":
      return {...state, loading: true}
    case "LOAD_MEALS":
      return {...state, loading: false, meals: action.meals}
    default:
      return state;
  }
}