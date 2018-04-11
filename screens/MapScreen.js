import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';

import * as actions from '../actions';

class MapScreen extends Component {
  // component-level state to handle initial region in mapView
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  // lifecycle methods
  componentDidMount () {
    this.setState({ mapLoaded: true })
  }

  // helper methods
  onRegionChangeComplete = (region) => {
    // console.log(region);
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  }

  // render method
  render () {
    // render spinner (ActivityIndicator) if mapLoaded = false
    if (!this.state.mapLoaded) {
      return (
        <View>
          <ActivityIndicator size="large" color="#000000"/>
        </View>
      );
    }

    return (
      <View style={styles.mainContainer}>
        <MapView
          style={styles.mapView}
          region={this.state.region}
          onRegionChange={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search this area"
            backgroundColor="#009688"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1
  },
  mapView: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
}

export default connect(null, actions)(MapScreen);
