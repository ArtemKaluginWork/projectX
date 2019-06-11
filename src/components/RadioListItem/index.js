import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { compose } from 'redux';

import withTheme from 'utils/withTheme';
import styles from './styles';

function getIconName(isActive) {
  return Platform.select({
    android: `md-radio-button-${isActive ? 'on' : 'off'}`,
    ios: `ios-radio-button-${isActive ? 'on' : 'off'}`,
  });
}

function RadioListItem({
  isActive,
  children,
  theme,
  ...rest
}) {
  return (
    <TouchableOpacity {...rest} style={styles[theme].button}>
      <Ionicons
        style={[styles[theme].icon, isActive && styles[theme].activeIcon]}
        name={getIconName(isActive)}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles[theme].text, isActive && styles[theme].activeText]}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

RadioListItem.propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default compose(
  withTheme,
  memo,
)(RadioListItem);
