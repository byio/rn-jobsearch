import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

// import redux store
import store from './store';

// import screens
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
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
        })
      }
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
