import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class SettingsScreen extends Component {
  // render method
  render () {
    return (
      <View>
        <Button
          title="Clear liked jobs"
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
        />
      </View>
    );
  }
}

export default SettingsScreen;
