import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';

// define constants
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ReviewScreen extends Component {
  // define class level properties to specify route-related configurations
  static navigationOptions = ({ navigation }) => ({
    title: 'Liked Jobs',
    tabBarIcon: ({ tintColor }) => {
      return <Icon
        name="favorite"
        size={25}
        color={tintColor}
      />;
    },
    headerRight: (
      <Button
        backgroundColor='rgba(0, 0, 0, 0)'
        color='rgba(0, 122, 255, 1)'
        title='Settings'
        onPress={() => { navigation.navigate('settingsRoute') }}
      />
    ),
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : 0
    }
  });

  // helper methods
  renderLikedJobs = () => {
    // map over the likedJobs state returned as an array from likes_reducer
    return this.props.likedJobs.map(job => {
      // destructure properties from each job object
      const {
        jobkey,
        jobtitle,
        company,
        formattedLocation,
        formattedRelativeTime,
        url,
        longitude,
        latitude
      } = job;
      // define initialRegion for MapView
      const initialRegion = {
        longitude,
        latitude,
        longitudeDelta: 0.005,
        latitudeDelta: 0.002
      };
      // for each job in the array, return the following JSX
      return (
        <Card
          key={jobkey}
          containerStyle={styles.cardContainer}
          title={jobtitle}
          titleStyle={styles.titleText}
        >
          <View style={styles.mapViewContainer}>
            <MapView
              style={styles.mapView}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
          </View>
          <View style={styles.jobDetailsContainer}>
            <Text style={styles.italicize}>{company}, {formattedLocation}</Text>
            <Text style={styles.italicize}>Posted {formattedRelativeTime}</Text>
          </View>
          <View>
            <Button
              title="Apply Now"
              backgroundColor="#03A9F4"
              onPress={() => Linking.openURL(url)}
            />
          </View>
        </Card>
      );
    });
  }

  // render method
  render () {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

const styles = {
  cardContainer: {
    height: SCREEN_HEIGHT * 0.45
  },
  titleText: {
    height: 40
  },
  mapViewContainer: {
    height: 100
  },
  jobDetailsContainer: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center'
  },
  mapView: {
    flex: 1
  },
  italicize: {
    fontStyle: 'italic'
  }
};

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
