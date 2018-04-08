import { AsyncStorage } from 'react-native';

import { FACEBOOK_LOGIN_SUCCESS } from './types';

// how to use AsyncStorage
/*
  AsyncStorage.setItem('fb_token', token)
  AsyncStorage.getItem('fb_token')
*/

export const facebookLogin = () => {
  return async function(dispatch) {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
      // dispatch an action saying that fb login is done
    } else {
      // start fb login process
    }
  };
};
