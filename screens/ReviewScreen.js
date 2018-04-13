import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  // define class level properties to specify route-related configurations
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        backgroundColor='rgba(0, 0, 0, 0)'
        color='rgba(0, 122, 255, 1)'
        title='Settings'
        onPress={() => { navigation.navigate('settingsRoute') }}
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
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

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
