import { Notifications } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

// import redux store
import store from './store';

// import function for push notifications
import registerForNotifications from './services/push_notifications';

// import screens
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  // lifecycle methods
  componentDidMount () {
    // run the function exported from push_notifications when component mounts
    registerForNotifications();
    // listen for push Notifications
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;

      if (origin === 'received' && text) {
        Alert.alert(
          'New Push Notification',
          text,
          [{ text: 'Ok' }]
        );
      }
    });
  }

  // render method
  render() {
    const MainNavigator = TabNavigator({
      welcomeRoute: { screen: WelcomeScreen },
      authRoute: { screen: AuthScreen },
      mainFlowRoute: {
        screen: TabNavigator({
          mapRoute: { screen: MapScreen },
          deckRoute: { screen: DeckScreen },
          reviewFlowRoute: {
            screen: StackNavigator({
              reviewRoute: { screen: ReviewScreen },
              settingsRoute: { screen: SettingsScreen }
            })
          }
        }, {
          tabBarPostion: 'bottom',
          swipeEnabled: false,
          tabBarOptions: {
            labelStyle: {
              fontSize: 12
            }
          }
        })
      }
    }, {
      navigationOptions: { tabBarVisible: false },
      lazy: true
    });

    return (
      // <View style={styles.container}>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
