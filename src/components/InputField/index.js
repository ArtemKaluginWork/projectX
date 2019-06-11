import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import { Colors } from 'constants';
import withTheme from 'utils/withTheme';
import styles from './styles';

function InputField(props) {
  const { theme } = props;
  return (
    <TextInput
      maxLength={32}
      {...props}
      style={styles[theme].input}
      placeholderTextColor={styles[theme].placeholderTextColor.color}
      blurOnSubmit
      underlineColorAndroid={Colors.defaultTheme.transparent}
      returnKeyType="done"
      selectionColor={styles[theme].selectionColor.color}
    />
  );
}

InputField.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default withTheme(memo(InputField));
