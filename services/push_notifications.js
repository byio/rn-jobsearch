import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens';

export default async () => {
  // attempt to retrieve previously stored token
  let previousToken = await AsyncStorage.getItem('pushtoken');
  // respond according to whether a previous token was found
  if (previousToken) {
    return;
  } else {
    // if no token found, ask for permission
    let { status } = await Permissions.askAsync(Permission.REMOTE_NOTIFICATIONS);
    // return if permission denied
    if (status !== 'granted') {
      return;
    }
    // get token if permission is granted (generate push token)
    let token = await Notifications.getExpoPushTokenAsync();
    // POST request to push endpoint (save token to server)
    await axios.post(PUSH_ENDPOINT, { token: {token} });
    // save token to AsyncStorage
    AsyncStorage.setItem('pushtoken', token);
  }
};
