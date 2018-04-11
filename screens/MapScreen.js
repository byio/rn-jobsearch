import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

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
      <View style={styles.container}>
        <MapView
          style={styles.mapView}
          region={this.state.region}
          onRegionChange={this.onRegionChangeComplete}
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
