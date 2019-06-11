import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import withTheme from 'utils/withTheme';
import styles from './styles';

function Card({ children, theme }) {
  return (
    <View style={styles[theme].cardWrapper}>
      <View style={[styles[theme].card, styles[theme].cardShadow]} />
      <View style={styles[theme].card}>
        {children}
      </View>
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(), PropTypes.element, PropTypes.node]),
  theme: PropTypes.string.isRequired,
};

Card.defaultProps = {
  children: null,
};

export default withTheme(memo(Card));
