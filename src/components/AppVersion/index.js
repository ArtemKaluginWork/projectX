import React, { memo } from 'react';
import { Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import { version as v, build as b } from '@/app.json';
import withTheme from 'utils/withTheme';
import styles from './styles';

function translate(t, name) {
  return t(`sidemenu:${name}`);
}

function AppVersion({ theme }) {
  const { t } = useTranslation();
  const version = translate(t, 'version');
  const build = translate(t, 'build');
  return (
    <Text style={styles[theme].text}>
      {`${version}: ${v} | ${build}: ${b}`}
    </Text>
  );
}

export default withTheme(memo(AppVersion));
