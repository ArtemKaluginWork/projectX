import React from 'react';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// screens
import Home from 'screens/Home';
import Send from 'screens/SendMessage';
import Settings from 'screens/Settings';

import { SideMenu } from 'components';
import { Layout } from 'constants';
import styles from '../styles';

const DrawerNavigatorConfig = {
  drawerWidth: Layout.window.width * 0.7,
  drawerPosition: 'left',
  useNativeAnimations: true,
  drawerBackgroundColor: 'transparent',
  hideStatusBar: Platform.select({
    android: false,
    ios: true,
  }),
  overlayColor: 'black',
  initialRouteName: 'Home',
  contentComponent: SideMenu,
  style: {
    backgroundColor: 'red',
  }
};

const navOpts = (item, icon) => ({ screenProps: { t } }) => ({
  drawerLabel: t(`sidemenu:${item}`),
  drawerIcon: ({ tintColor }) => icon && (
    <Ionicons
      name={`${Platform.select({ android: 'md', ios: 'ios' })}-${icon}`}
      size={26}
      style={styles.icon}
      color={tintColor}
    />
  ),
});

const Routes = {
  Home: {
    screen: Home,
    navigationOptions: navOpts('home', 'home'),
  },
  Send: {
    screen: Send,
    navigationOptions: navOpts('send', 'send'),
  },
  Settings: {
    screen: Settings,
    navigationOptions: navOpts('settings', 'settings'),
  },
};

const Drawer = createDrawerNavigator(Routes, DrawerNavigatorConfig);

export default Drawer;
