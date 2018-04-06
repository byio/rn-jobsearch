import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // define class level properties to specify route-related configurations
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: <Button title='Settings' onPress={() => { navigation.navigate('settingsRoute') }} />
  });

  // render method
  render () {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
