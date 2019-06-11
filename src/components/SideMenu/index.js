import React, { memo } from 'react';
import { ScrollView, View } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { withTranslation } from 'react-i18next';

import withTheme from 'utils/withTheme';
import AppVersion from '../AppVersion';
import styles from './styles';

const SideMenu = ({ theme, ...props }) => (
  <View style={styles[theme].main}>
    <ScrollView contentContainerStyle={styles[theme].container}>
      <SafeAreaView style={styles[theme].container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems
          {...props}
          activeBackgroundColor={styles[theme].activeBackgroundColor.color}
          activeLabelStyle={styles[theme].activeLabelStyle}
          activeTintColor={styles[theme].activeTintColor.color}
          inactiveLabelStyle={styles[theme].inactiveLabelStyle}
          inactiveTintColor={styles[theme].inactiveTintColor.color}
          itemStyle={styles[theme].itemStyle}
          itemsContainerStyle={styles[theme].itemsContainerStyle}
          labelStyle={styles[theme].labelStyle}
          iconContainerStyle={styles[theme].iconContainerStyle}
        />
        <AppVersion />
      </SafeAreaView>
    </ScrollView>
  </View>
);

export default withTranslation()(withTheme(memo(SideMenu)));
