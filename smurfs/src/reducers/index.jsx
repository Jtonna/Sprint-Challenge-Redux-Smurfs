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
    return {
      ...state,
      loading: true
    }

    case GET_SMURFS:
        return {
          ...state,
            smurfs: action.payload,
            loading: false
          }
        
    case ADD_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: true,
          loading: false
        }

    case UPDATE_SMURF:
        return {
          ...state,
            smurfs: action.payload,
            updatingSmurf: true,
            loading: false 
        }
      
    case DELETE_SMURF:
        return {
          ...state,
            smurfs: action.payload,
            deletingSmurf: true,
            loading: false 
        }
      
    case ERROR:
        return {
          ...state,
          error: action.payload,
          loading: false
        }
      
    default:
        return state
  }
}
