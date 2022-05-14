const ADD_PROF = "ADD_PROF";
const REMOVE_PROF = "REMOVE_PROF";
const ADD_WORK = "ADD_WORK";
const REMOVE_WORK = "REMOVE_WORK";

const defaultState = {
  profession: [],
  work: []
}

const  profActiveReducer = (state = defaultState, action) => {

  switch(action.type){
    case ADD_PROF:
      return {...state, profession: [...state.profession, action.payload]}
    case REMOVE_PROF:
      return {...state, profession: state.profession.filter(el => el !== action.payload) }
    case ADD_WORK:
      return {...state, work: [...state.work, action.payload]}
    case REMOVE_WORK:
      return {...state, work: state.work.filter(el => el !== action.payload) }
    default:
      return state;
  }
}

export default profActiveReducer;