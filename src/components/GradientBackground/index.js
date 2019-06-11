import React, { memo } from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

import withTheme from 'utils/withTheme';
import styles from './styles';

function GradientBackground({ children, theme }) {
  return (
    <LinearGradient colors={[styles[theme].color2.color, styles[theme].color1.color]} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
}

GradientBackground.propTypes = {
  children: PropTypes.oneOf([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  theme: PropTypes.string.isRequired,
};

GradientBackground.defaultProps = {
  children: null,
};

export default withTheme(memo(GradientBackground));
