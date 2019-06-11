import React, { PureComponent } from 'react';
import LinearGradient from 'react-native-linear-gradient';

const CHECK_COLOR_REG = /^color\d+$/;
const HANDLE_COLOR_REG = /^color/;

class GradientHelper extends PureComponent {
  getColors = () => Object.entries(this.props).reduce((acc, [key, value]) => {
    if (CHECK_COLOR_REG.test(key)) {
      acc[key.replace(HANDLE_COLOR_REG, '')] = value;
    }
    return acc;
  }, []);

  render() {
    const {
      style,
      start = { x: 0, y: 0 },
      end = { x: 0, y: 1 },
    } = this.props;
    const colors = this.getColors();
    return (
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={style}
      />
    );
  }
}

export default GradientHelper;
