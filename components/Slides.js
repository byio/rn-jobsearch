import React, { Component } from 'react';
import { ScrollView, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
  // helper methods
  renderLastSlideButton (index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.button}
          onPress={this.props.onSlidesComplete}
          title="Onwards :)"
          raised
        />
      );
    }
  }

  renderSlides () {
    return this.props.data.map(({ text, color }, index) => {
      return (
        <View
          key={text}
          style={[styles.slide, { backgroundColor: color }]}
        >
          <Text style={styles.slideText}>{text}</Text>
          {this.renderLastSlideButton(index)}
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
    textAlign: 'center',
    marginLeft: 50,
    marginRight: 50,
    color: '#f9f9f9'
  },
  button: {
    backgroundColor: '#0288D1',
    marginTop: 30,
    borderRadius: 10
  }
};

export default Slides;
