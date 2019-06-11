import React, { memo, useEffect, useRef } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { settings as actions } from 'actions';
import { changeLanguage } from 'utils';
// routers
import Starting from './StackRouters/Starting';
import Drawer from './DrawerRouters/Drawer';

const SwitchNav = createAppContainer(createSwitchNavigator({
  Starting,
  Drawer,
}));

function setLanguage(lng) {
  changeLanguage(lng);
}
function AppNavigator({ lng, setLng }) {
  const { t, i18n: { language } } = useTranslation();
  const ref = useRef()

  useEffect(() => {
    if (!lng) {
      setLng(language);
    } else {
      setLanguage(lng);
    }
  }, [lng]);

  return (
    <SwitchNav screenProps={{ t, language, topNav: ref }} ref={ref} />
  );
}

const mapStateToProps = ({ settings = {} }) => ({ lng: settings.language });

const mapDispatchToProps = dispatch => bindActionCreators({ setLng: actions.setLanguage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(memo(AppNavigator));
