import { combineReducers } from 'redux';

import auth from './auth_reducer';
import job from './job_reducer';
import likedJobs from './likes_reducer';

export default combineReducers({
  auth,
  job,
  likedJobs
});
