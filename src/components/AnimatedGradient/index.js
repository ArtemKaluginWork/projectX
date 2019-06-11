import React, { Component } from 'react';
import { Animated, StyleSheet } from 'react-native';
import Color from 'color';

import withTheme from 'utils/withTheme';
import GradientHelper from './GradientHelper';
import styles from './styles';

const AnimatedGradientHelper = Animated.createAnimatedComponent(GradientHelper);

const ANIMATION_DURATION = 5000;
const ANIMATION_DELAY = 5000;
const CHECK_COLOR_REG = /^color\d+$/;
const HANDLE_COLOR_REG = /^color/;

function getColors(list) {
  return Object.entries(list).reduce((acc, [key, value]) => {
    if (CHECK_COLOR_REG.test(key)) {
      acc[key.replace(HANDLE_COLOR_REG, '')] = value.color;
    }
    return acc;
  }, []);
}

class AnimatedGradient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweener: new Animated.Value(0),
    };
    this.colors = getColors(styles[props.theme]);
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = async () => {
    const { tweener } = this.state;
    const { theme } = this.props;
    const colors = getColors(styles[theme]);
    const toValue = colors.length - 1;
    Animated.loop(
      Animated.sequence([
        Animated.timing(tweener, {
          toValue,
          duration: ANIMATION_DURATION,
          delay: ANIMATION_DELAY,
          useNativeDriver: false,
        }),
        Animated.timing(tweener, {
          toValue: 0,
          duration: ANIMATION_DURATION,
          delay: ANIMATION_DELAY,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  };

  getIR = colors => colors.map((i, index) => index);

  getOR = (colors, ind) => [colors[ind], ...(colors.slice(ind + 1)), ...(colors.slice(0, ind))];

  render() {
    const { tweener } = this.state;
    const { style, theme } = this.props;
    const colorsList = getColors(styles[theme]);

    const colors = colorsList.reduce((acc, color, ind) => {
      acc[`color${ind}`] = tweener.interpolate({
        inputRange: this.getIR(colorsList),
        outputRange: this.getOR(colorsList, ind),
      });
      return acc;
    }, {});

    return (
      <AnimatedGradientHelper
        style={style || styles[theme].main}
        {...colors}
      />
    );
  }
}

export default withTheme(AnimatedGradient);
