import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
  Container,
  CopyLink,
  PlusButton,
  Title,
} from 'components';
import commonStyles from 'styles';
import withTheme from 'utils/withTheme';
import styles from './styles';

class Invite extends PureComponent {
  componentDidMount() {
    SplashScreen.hide();
  }

  toCreateCurrency = () => {
    const { navigation: { navigate } } = this.props;
    navigate('CreateCurrency');
  };

  render() {
    const { screenProps: { t }, theme } = this.props;
    return (
      <Container>
        <KeyboardAwareScrollView
          style={commonStyles[theme].flexibleContainer}
          contentContainerStyle={styles[theme].ccs}
        >
          <Title>{t('Invite your person')}</Title>
          <View>
            <CopyLink>share.app.com/j21g4efv76f72brk</CopyLink>
            <Text style={commonStyles[theme].text}>{t('Tap to copy link')}</Text>
          </View>
          <Text style={commonStyles[theme].text}>{t('To join a currency, use the link your person gives you')}</Text>
          <View>
            <PlusButton onPress={this.toCreateCurrency} />
            <Text style={commonStyles[theme].text}>{t('I\'ve shared')}</Text>
          </View>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

export default withTheme(Invite);
