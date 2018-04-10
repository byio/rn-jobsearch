import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  // render method
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  mapView: {
    flex: 1
  }
}

export default MapScreen;
