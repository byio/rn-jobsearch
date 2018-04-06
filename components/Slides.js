import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

class Slides extends Component {
  // helper methods
  renderSlides () {
    return this.props.data.map(({ text }) => {
      return (
        <View key={text}>
          <Text>{text}</Text>
        </View>
      );
    });
  }

  // render method
  render () {
    return (
      <ScrollView
        horizontal
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;
