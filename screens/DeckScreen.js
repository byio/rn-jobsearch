import React, { Component } from 'react';
import { View, Text, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { MapView } from 'expo';

// import components
import Swipe from '../components/Swipe';

// import actions
import * as actions from '../actions';

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
      <Card titleStyle={styles.titleText} title={job.jobtitle}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.mapView}
            scrollEnabled={false}
            cacheEnabled={Platform.OS === 'android' ? true : false}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>{job.company}</Text>
          <Text style={styles.detailText}>Posted {job.formattedRelativeTime}</Text>
        </View>
        <Text style={styles.jobText}>
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
          onSwipeRight={job => this.props.likeJob(job) }
        />
      </View>
    );
  }
}

const styles = {
  swipeContainer: {
    marginTop: SCREEN_HEIGHT * 0.05
  },
  titleText: {
    height: 40,
    justifyContent: 'center'
  },
  mapContainer: {
    height: SCREEN_HEIGHT * 0.3
  },
  mapView: {
    flex: 1
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  detailText: {
    fontStyle: 'italic'
  },
  jobText: {
    marginTop: 10
  }
};

const mapStateToProps = state => {
  return { jobs: state.job.results };
};

export default connect(mapStateToProps, actions)(DeckScreen);
