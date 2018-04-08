import { AsyncStorage } from 'react-native';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';

// how to use AsyncStorage
/*
  AsyncStorage.setItem('fb_token', token)
  AsyncStorage.getItem('fb_token')
*/

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // dispatch an action saying that fb login is done
  } else {
    // start fb login process
  }
};
