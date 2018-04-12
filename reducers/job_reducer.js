// import action types
import { FETCH_JOBS } from '../actions/types';

// define initial state
const INITIAL_STATE = {
  results: []
};

// export, by default, an arrow funciton (the reducer)
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return action.payload;
    default:
      return state;
  }
};
