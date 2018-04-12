import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class DeckScreen extends Component {
  // render method
  render () {
    return (
      <View>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
        <Text>DeckScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => {
  return { jobs };
};

export default connect(mapStateToProps)(DeckScreen);
