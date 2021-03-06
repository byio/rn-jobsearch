import React, { Component } from 'react';
import {
  Animated,
  View,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';

// constants
const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;
const SWIPE_OUT_DURATION = 250;
const CASCADING_FACTOR = 1;

// Swipe deck component
class Swipe extends Component {
  // default props
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  // constructor function
  constructor (props) {
    super(props);
    this.state = {
      cardIndex: 0
    };
  }

  // lifecycle methods
  componentWillMount () {
    // init new animation
    this.position = new Animated.ValueXY();
    // pan responder panHandlers
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gesture) => true,
      onPanResponderMove: (event, gesture) => {
        this.position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.cardExit('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.cardExit('left');
        } else {
          this.resetPosition();
        }
      }
    })
  }
  componentWillReceiveProps (nextProps) {
    /*
      check to see if the new set of props is identical to
      the current set of props; reset index if different
    */
    if (nextProps.data !== this.props.data) {
      this.setState({
        cardIndex: 0
      });
    }
  }
  componentWillUpdate () {
    // code required in android
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  // helper methods
    // card programmatically exits specified side of screen
  cardExit (direction) {
    // if direction is right, x = SCREEN_WIDTH, otherwise, x = -SCREEN_WIDTH
    const x = direction === 'right' ? SCREEN_WIDTH * 1.2 : -SCREEN_WIDTH * 1.2
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => {
      this.onSwipeComplete(direction);
    });
  }
    // callback function after cardExit animation
  onSwipeComplete (direction) {
    const { onSwipeRight, onSwipeLeft, data } = this.props;
    const item = data[this.state.cardIndex];
    // console.log(`${item.text} was swiped ${direction}.`);
    // handling data returned from swiping left or right
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    // advance card stack
    this.position.setValue({ x: 0, y: 0 });
    this.setState({
      cardIndex: this.state.cardIndex + 1
    });
  }
    // resets card position when gesture ends
  resetPosition () {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }
    /*
      the getCardStyle method returns the style object for
      each Animated.View component
    */
  getCardStyle () {
    // set up rotation using .interpolate()
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    };
  }
    /*
      the renderCards method will receive data and
      renderCard props
    */
  renderCards () {
    // if all cards have been swiped
    if (this.state.cardIndex >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }
    // if there are un-swiped cards in data array
    return this.props.data.map ((item, i) => {
      // if card has been swiped do not render
      if (i < this.state.cardIndex) return null;
      // check that card is first in deck, and animate
      if (i === this.state.cardIndex) {
        return (
          <Animated.View
            key={item[this.props.keyProp]}
            style={[ this.getCardStyle(), styles.cardStyle ]}
            {...this._panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item[this.props.keyProp]}
          style={[ styles.cardStyle, { top: CASCADING_FACTOR * (i - this.state.cardIndex) } ]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  // render method
  render () {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

// styles
const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

// export swipe deck component
export default Swipe;
