import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

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
        pagingEnabled
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
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 30,
    marginLeft: 50,
    marginRight: 50
  }
};

export default Slides;
