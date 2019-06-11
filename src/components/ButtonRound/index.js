import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import withTheme from 'utils/withTheme';
import styles from './styles';

function ButtonRound({
  children,
  disabled,
  submitting,
  theme,
  ...rest
}) {
  return (
    <TouchableOpacity {...rest} style={styles[theme].button} disabled={disabled}>
      {submitting ? (
        <ActivityIndicator color={styles[theme].indicator.color} />
      ) : (
        <Text style={styles[theme].text}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}

ButtonRound.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  submitting: PropTypes.bool,
  theme: PropTypes.string.isRequired,
};

ButtonRound.defaultProps = {
  disabled: false,
  children: null,
  submitting: false,
};

export default withTheme(memo(ButtonRound));
