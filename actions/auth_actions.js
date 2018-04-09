import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from './types';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';

// how to use AsyncStorage
/*
  AsyncStorage.setItem('fb_token', token)
  AsyncStorage.getItem('fb_token')
*/

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // dispatch an action saying that fb login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // start fb login process
    doFacebookLogin(dispatch);
  }
};

// helper functions
const doFacebookLogin = async dispatch => {
  // invoke facebook login function imported from expo
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    FACEBOOK_APP_ID,
    permissions: ['public_profile']
  );
  // login failure
  if (type === 'cancel') {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  // login success
    // save token on user's phone
  await AsyncStorage.setItem('fb_token', token);
    // dispatch login success action
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
