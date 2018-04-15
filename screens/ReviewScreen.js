import React, { Component } from 'react';
import { View, Text, Platform, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';

class ReviewScreen extends Component {
  // define class level properties to specify route-related configurations
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
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
      // for each job in the array, return the following JSX
      return (
        <Card
          key={job.jobkey}
          containerStyle={styles.cardContainer}
        >
          <View>
            <Text>{job.jobtitle}</Text>
            <Text>@</Text>
            <Text>{job.company}, {job.formattedLocation}</Text>
            <Text>Posted {job.formattedRelativeTime}</Text>
          </View>
          <Button
            title="Apply Now"
            backgroundColor="#03A9F4"
          />
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
    height: 200
  }
};

const mapStateToProps = ({ likedJobs }) => {
  return { likedJobs };
};

export default connect(mapStateToProps)(ReviewScreen);
