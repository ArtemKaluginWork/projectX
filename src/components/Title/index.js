import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import withTheme from 'utils/withTheme';
import styles from './styles';

function Title({ children, theme }) {
  return <Text style={styles[theme].title}>{children}</Text>;
}

Title.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

Title.defaultProps = {
  children: null,
};

export default withTheme(memo(Title));
