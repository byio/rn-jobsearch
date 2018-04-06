import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

class Slides extends Component {
  // helper methods
  renderSlides () {
    return this.props.data.map(({ text }) => {
      return (
        <View
          key={text}
          style={styles.slide}
        >
          <Text style={styles.slideText}>{text}</Text>
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

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideText: {
    fontSize: 30
  }
};

export default Slides;
