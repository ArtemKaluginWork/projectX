import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
  ButtonAttachImage,
  ButtonRound,
  Container,
  CurrencyRound,
  InputField,
} from 'components';
import commonStyles from 'styles';
import withTheme from 'utils/withTheme';
import styles from './styles';

class SendMessage extends PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const {
      screenProps: { t },
      theme,
    } = this.props;
    return (
      <Container>
        <KeyboardAwareScrollView style={commonStyles[theme].flexibleContainer} contentContainerStyle={styles.ccs}>
          <CurrencyRound />
          <InputField maxLength={160} placeholder={t('Your message')} />
          <ButtonAttachImage />
          <ButtonRound>{t('Send')}</ButtonRound>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

export default withTheme(SendMessage);
