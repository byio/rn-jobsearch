import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';

// import action types
import { FETCH_JOBS } from './types';

export default fetchJobs = (region) => return async dispatch => {
  try {
    let zip = await reverseGeocode(region);
  } catch (err) {
    console.log(err);
  }
};
