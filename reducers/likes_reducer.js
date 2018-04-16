import _ from 'lodash';

// import action types
import { LIKE_JOB, CLEAR_LIKED_JOBS } from '../actions/types';

// export reducer
export default (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      // return an array of unique objects based on the jobkey property
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey');
    case CLEAR_LIKED_JOBS:
      return [];
    default:
      return state;
  }
};
