import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import Card from 'components/Card';
import withTheme from 'utils/withTheme';
import styles from './styles';

function Message({ children, theme }) {
  return (
    <Card>
      <Text style={styles[theme].text}>
        {children}
      </Text>
    </Card>
  );
}

Message.propTypes = {
  children: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

Message.defaultProps = {
  children: null,
};

export default withTheme(memo(Message));
