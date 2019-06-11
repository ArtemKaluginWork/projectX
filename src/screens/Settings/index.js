import React, { memo, PureComponent } from 'react';
import { ScrollView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';

import { Container, RadioListItem, SettingsListItem } from 'components';
import { AvailableLanguages, Languages, THEMES } from 'constants';
import withTheme from 'utils/withTheme';
import styles from './styles';

const song = require('../../assets/sounds/HoMM.mp3');

function setTestState(testInfo, component, status) {
  component.setState({ tests: { ...component.state.tests, [testInfo.title]: status } });
}

/**
 * Generic play function for majority of tests
 */
function playSound(testInfo, component) {
  setTestState(testInfo, component, 'pending');

  const callback = (error, sound) => {
    if (error) {
      Alert.alert('error', error.message);
      setTestState(testInfo, component, 'fail');
      return;
    }
    setTestState(testInfo, component, 'playing');
    // Run optional pre-play callback
    testInfo.onPrepared && testInfo.onPrepared(sound, component);
    sound.play(() => {
      // Success counts as getting to the end
      setTestState(testInfo, component, 'win');
      // Release when it's done so we're not using up resources
      sound.release();
    });
  };

  // If the audio is a 'require' then the second parameter must be the callback.
  if (testInfo.isRequire) {
    const sound = new Sound(testInfo.url, error => callback(error, sound));
  } else {
    const sound = new Sound(testInfo.url, testInfo.basePath, error => callback(error, sound));
  }
}

const LNGS_LIST = AvailableLanguages.map(code => ({ code, ...Languages[code] }));
const SOUND = {
  title: 'mp3 via require()',
  isRequire: true,
  url: song,
};

const renderListItem = ({ code, ...props }) => <SettingsListItem {...props} code={code} key={code} />;

class Settings extends PureComponent {
  constructor(props) {
    super(props);

    Sound.setCategory('Playback', true); // true = mixWithOthers

    // Special case for stopping
    this.stopSoundLooped = () => {
      if (!this.state.loopingSound) {
        return;
      }

      this.state.loopingSound.stop().release();
      this.setState({ loopingSound: null, tests: { ...this.state.tests, 'mp3 in bundle (looped)': 'win' } });
    };

    this.state = {
      loopingSound: undefined,
      tests: {
        title: 'mp3 via require()',
        isRequire: true,
        url: song,
      }
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  onThemePress = (theme) => {
    const { screenProps: { language }, updateTheme } = this.props;
    if (theme === 'swedish' && language === 'ru') {
      playSound(SOUND, this);
    }
    updateTheme(theme);
  };

  renderThemeItem = (theme) => {
    const { screenProps: { t }, theme: th } = this.props;
    return (
      <RadioListItem key={theme} isActive={theme === th} onPress={() => this.onThemePress(theme)}>
        {t(`theme:${theme}`)}
      </RadioListItem>
    );
  };

  render() {
    const { screenProps: { t } } = this.props;
    return (
      <Container>
        <ScrollView style={styles.main} contentContainerStyle={styles.ccs}>
          <Text style={styles.title}>{t('Change language')}</Text>
          {LNGS_LIST.map(renderListItem)}
          <Text style={styles.title}>{t('theme:Change theme')}</Text>
          {THEMES.map(this.renderThemeItem)}
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = ({ settings = {} }) => ({ lng: settings.language });

export default connect(mapStateToProps)(withTheme(memo(Settings)));
