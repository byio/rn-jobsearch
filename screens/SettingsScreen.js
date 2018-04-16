import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import { clearLikedJobs } from '../actions';

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
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, {clearLikedJobs})(SettingsScreen);
