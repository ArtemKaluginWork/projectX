import React, { memo } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-native-animate-number';
import { connect } from 'react-redux';
import { compose } from 'redux';

import styles from './styles';
import withTheme from '../../utils/withTheme';

function CurrencyRound({ currency, theme, value }) {
  return (
    <View style={styles[theme].wrapper}>
      <Text style={styles[theme].text}>
        <AnimateNumber
          interval={32}
          steps={10}
          value={Number(value)}
          formatter={val => `${parseFloat(val) > 0 ? '+' : ''}${parseFloat(val).toFixed(2)} `}
        />
        <Text style={styles[theme].currency}>{currency}</Text>
      </Text>
    </View>
  );
}

CurrencyRound.propTypes = {
  currency: PropTypes.string,
  theme: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CurrencyRound.defaultProps = {
  currency: null,
  value: null,
};

const mapStateToProps = ({ currency = {} }) => ({
  currency: currency.code,
  value: currency.value,
});

export default compose(
  connect(mapStateToProps),
  withTheme,
  memo,
)(CurrencyRound);
