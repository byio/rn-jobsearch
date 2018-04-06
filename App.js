import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

// import screens
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';

export default class App extends React.Component {
  // render method
  render() {
    const MainNavigator = TabNavigator({
      welcomeRoute: { screen: WelcomeScreen },
      authRoute: { screen: AuthScreen }
    });

    return (
      // <View style={styles.container}>
      <MainNavigator/>
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
