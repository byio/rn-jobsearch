import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends Component {
  // lifecycle methods
  componentDidMount () {
    this.props.facebookLogin();
  }

  componentWillReceiveProps (nextProps) {
    this.onAuthComplete(nextProps);
  }

  // helper functions
  onAuthComplete (props) {
    if (props.token) {
      this.props.navigation.navigate('mapRoute');
    }
  }

  // render method
  render () {
    return (
      <View/>
    );
  }
}

// mapStateToProps; destructure the auth piece of state from the global state object
const mapStateToProps = ({ auth }) => {
  return { token: auth.token }
}

export default connect(mapStateToProps, actions)(AuthScreen);
