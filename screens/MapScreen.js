import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

class MapScreen extends Component {
  // component-level state to handle initial region in mapView
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  // render method
  render () {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          region={this.state.region}
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
