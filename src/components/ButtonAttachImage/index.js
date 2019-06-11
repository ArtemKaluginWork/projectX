import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import withTheme from 'utils/withTheme';
import styles from './styles';

function ButtonAttachImage({
  children,
  disabled,
  submitting,
  theme,
  ...rest
}) {
  return (
    <View style={styles[theme].buttonWrapper}>
      <TouchableOpacity {...rest} style={styles[theme].button} disabled={disabled}>
        <Text style={styles[theme].text}>+ GIF</Text>
      </TouchableOpacity>
    </View>
  );
}

ButtonAttachImage.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  submitting: PropTypes.bool,
  theme: PropTypes.string.isRequired,
};

ButtonAttachImage.defaultProps = {
  disabled: false,
  children: null,
  submitting: false,
};

export default withTheme(memo(ButtonAttachImage));
