import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

// data to be rendered on slides
const SLIDE_DATA = [
  { text: 'Welcome to Native Jobs!', color: '#03A9F4' },
  { text: 'Use this app to find a job in your native location.', color: '#009688' },
  { text: 'Simply set your location, and swipe away!', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  // component-level state
  state = { token: null }

  // helper methods
  onSlidesComplete = () => {
    this.props.navigation.navigate('authRoute');
  }

  // render method
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete}/>
      </View>
    );
  }
}

export default WelcomeScreen;
