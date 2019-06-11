import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Currency,
  Message,
  PlusButton,
  MinusButton,
} from 'components';
import { currency as actions } from 'actions';
import styles from './styles';

const CURRENCY_STEP = 0.01;
const CURRENCY_STEP_ON_HOLDING = 0.1;
const PRESS_IN_INTERVAL = 100;

class Home extends Component {
  static propsTypes = {
    changeValue: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  state = { value: 0 };

  componentDidMount() {
    SplashScreen.hide();
  }

  onMinusPress = () => this.changeValue(-CURRENCY_STEP);

  onMinusHold = () => {
    this.interval = setInterval(
      () => this.changeValue(-CURRENCY_STEP_ON_HOLDING),
      PRESS_IN_INTERVAL,
    );
  };

  onPlusPress = () => this.changeValue(CURRENCY_STEP);

  onPlusHold = () => {
    this.interval = setInterval(
      () => this.changeValue(CURRENCY_STEP_ON_HOLDING),
      PRESS_IN_INTERVAL,
    );
  };

  clearInterval = () => clearInterval(this.interval);

  changeValue = (step) => {
    const { value, changeValue } = this.props;
    const num = Number(value);
    const fixedSum = parseFloat(num + step).toFixed(2);
    changeValue(Number(fixedSum));
  };

  render() {
    const { name, screenProps: { t } } = this.props;
    return (
      <Container>
        <View style={styles.main}>
          <View style={styles.header}>
            <Currency />
          </View>
          <View style={{ flex: 1 }}>
            <Message>
              {t('Send your person some currency', { currency: name })}
            </Message>
          </View>
          <View style={styles.footer}>
            <View>
              <PlusButton onPress={this.onPlusPress} onPressIn={this.onPlusHold} onPressOut={this.clearInterval} />
              <MinusButton onPress={this.onMinusPress} onPressIn={this.onMinusHold} onPressOut={this.clearInterval} />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ currency = {} }) => ({
  name: currency.name,
  value: currency.value
});

const mapDispatchToActions = dispatch => bindActionCreators({
  changeValue: actions.setCurrencyValue,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToActions)(Home);
