import React, { memo } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-native-animate-number';
import { connect } from 'react-redux';

import withTheme from 'utils/withTheme';
import styles from './styles';

function Currency({ currency, theme, value }) {
  return (
    <Text style={styles[theme].text}>
      <AnimateNumber
        interval={32}
        steps={10}
        value={Number(value)}
        formatter={val => `${parseFloat(val).toFixed(2)} `}
      />
      <Text style={styles[theme].currency}>{currency}</Text>
    </Text>
  );
}

Currency.propTypes = {
  currency: PropTypes.string,
  theme: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Currency.defaultProps = {
  currency: null,
  value: null,
};

const mapStateToProps = ({ currency = {} }) => ({
  currency: currency.code,
  value: currency.value,
});

export default connect(mapStateToProps)(withTheme(memo(Currency)));
