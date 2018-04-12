import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';

import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  // helper functions
  renderCard = (job) => {
    return (
      <Card title={job.jobtitle}>
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

  // render method
  render () {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
        />
      </View>
    );
  }
}

const styles = {
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
};

const mapStateToProps = state => {
  return { jobs: state.job.results };
};

export default connect(mapStateToProps)(DeckScreen);
