import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

// import indeed credentials
import { INDEED_PUBLISHER_ID } from 'react-native-dotenv';

// import action types
import { FETCH_JOBS } from './types';

// define indeed url and query parameters
const QUERY_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
const JOB_QUERY_PARAMS = {
  publisher: INDEED_PUBLISHER_ID,
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript'
};

// helper functions
const buildQueryUrl = (zip) => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${QUERY_ROOT_URL}${query}`;
};

export default fetchJobs = (region) => return async dispatch => {
  try {
    let zip = await reverseGeocode(region);
    const queryUrl = buildQueryUrl(zip);
    // axios get request
    let { data } = await axios.get(queryUrl);
    // dispatch action
    dispatch({ type: FETCH_JOBS, payload: data });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
