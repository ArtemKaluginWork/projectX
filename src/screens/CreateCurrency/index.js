import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import {
  Container,
  InputField,
  Message,
  PlusButton,
  Title,
} from 'components';
import { currency as actions } from 'actions';
import commonStyles from 'styles';
import withTheme from 'utils/withTheme';
import styles from './styles';

class CreateCurrency extends PureComponent {
  static propTypes = {
    code: PropTypes.string,
    name: PropTypes.string,
    changeCode: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired,
  };

  static defaultProps = {
    code: null,
    name: null,
  };

  state = { invalid: false };

  componentDidMount() {
    SplashScreen.hide();
  }

  checkCurrency = () => {
    const { code, name } = this.props;
    if (!code || !name) {
      this.setState({ invalid: true });
      return;
    }
    const valid = Boolean(code.trim()) && Boolean(name.trim());
    this.setState({ invalid: !valid }, () => valid && this.toHomepage());
  };

  toHomepage = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Home');
  };

  render() {
    const {
      code,
      name,
      changeCode,
      changeName,
      screenProps: { t },
      theme,
    } = this.props;
    const { invalid } = this.state;
    return (
      <Container>
        <KeyboardAwareScrollView style={commonStyles[theme].flexibleContainer} contentContainerStyle={styles.ccs}>
          <Title>{t('Create your currency')}</Title>
          <Message>{t('It\'s fun to do this together')}</Message>
          {invalid && <Text style={commonStyles[theme].text}>{t('Please fill in all fields')}</Text>}
          <InputField
            placeholder={t('Give your currency a name')}
            value={name}
            onChangeText={changeName}
          />
          <InputField
            placeholder={t('And a shortcode')}
            value={code}
            onChangeText={changeCode}
          />
          <View>
            <PlusButton onPress={this.checkCurrency} />
            <Text style={commonStyles[theme].text}>{t('Create')}</Text>
          </View>
        </KeyboardAwareScrollView>
      </Container>
    );
  }
}

const mapStateToProps = ({ currency = {} }) => ({
  code: currency.code,
  name: currency.name,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeCode: actions.setCurrencyCode,
  changeName: actions.setCurrencyName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(CreateCurrency));
