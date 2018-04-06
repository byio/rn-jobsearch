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
  // render method
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} />
      </View>
    );
  }
}

export default WelcomeScreen;
