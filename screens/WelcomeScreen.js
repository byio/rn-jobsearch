import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Slides from '../components/Slides';

// data to be rendered on slides
const SLIDE_DATA = [
  { text: 'Welcome to Native Jobs!' },
  { text: 'Use this app to find a job in your native location.' },
  { text: 'Simply set your location, and swipe away!' }
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
