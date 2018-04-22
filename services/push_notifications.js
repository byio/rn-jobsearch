import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';

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
    // get token if permission is granted
    let token = await Notifications.getExpoPushTokenAsync();
  }
};
