import React, { Component } from 'react';
import { View, Text, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';

import Swipe from '../components/Swipe';

// define constants
const SCREEN_HEIGHT = Dimensions.get('window').height;

class DeckScreen extends Component {
  // helper functions
  renderCard = (job) => {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      longitudeDelta: 0.045,
      latitudeDelta: 0.02
    };
    return (
      <Card title={job.jobtitle}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapView}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          />
      </View>
        <View style={styles.detailContainer}>
          <Text>{job.company}</Text>
          <Text>{job.formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<\/*b>/g, '')}
        </Text>
      </Card>
    );
  }
  renderNoMoreCards = () => {
    return (
      <Card title="No more jobs">
      </Card>
    );
  }

  // render method
  render () {
    return (
      <View style={styles.swipeContainer}>
        <Swipe
          keyProp="jobkey"
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = {
  swipeContainer: {
    marginTop: SCREEN_HEIGHT * 0.05
  },
  mapContainer: {
    height: SCREEN_HEIGHT * 0.5
  },
  mapView: {
    flex: 1
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

const mapStateToProps = state => {
  return { jobs: state.job.results };
};

export default connect(mapStateToProps)(DeckScreen);
