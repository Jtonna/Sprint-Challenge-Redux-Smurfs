import { LOADING, GET_SMURFS, ADD_SMURF, UPDATE_SMURF, DELETE_SMURF, ERROR } from '../actions';

const initState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurfs: false,
  updatingSmurfs: false,
  deleteSmurfs: false,
  error: null,
}

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return{
        ...state,
          loading: true,
      }

    case GET_SMURFS:
      return{
        ...state,
          smurfs: action.payload,
          loading: false,
      }

      default:
        return state
  }
}
