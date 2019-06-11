import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import { settings as actions } from 'actions';
import { changeLanguage } from 'utils';
import withTheme from 'utils/withTheme';
import styles from './styles';

function getIconName(isActive) {
  return Platform.select({
    android: `md-radio-button-${isActive ? 'on' : 'off'}`,
    ios: `ios-radio-button-${isActive ? 'on' : 'off'}`,
  });
}

function SettingsListItem({
  changeLng,
  code,
  nativeName,
  language,
  theme,
}) {
  const isActive = language === code;
  const onPress = () => { changeLng(code); changeLanguage(code); };
  return (
    <TouchableOpacity key={code} onPress={onPress} style={styles[theme].button}>
      <Ionicons
        style={[styles[theme].icon, isActive && styles[theme].activeIcon]}
        name={getIconName(isActive)}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles[theme].text, isActive && styles[theme].activeText]}
      >
        {nativeName}
      </Text>
    </TouchableOpacity>
  );
}

SettingsListItem.propTypes = {
  changeLng: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  nativeName: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

SettingsListItem.defaultProps = {
  language: null,
};

const mapStateToProps = ({ settings = {} }) => ({ language: settings.language });

const mapDispatchToProps = dispatch => bindActionCreators({ changeLng: actions.setLanguage }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withTheme,
  memo,
)(SettingsListItem);
