import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import MinusIcon from 'assets/svg/minus-circle.svg';
import withTheme from 'utils/withTheme';
import styles from './styles';

const ICON_SIZE = 60;

function MinusButton(props) {
  const { theme } = props;
  return (
    <TouchableOpacity {...props} style={styles[theme].button}>
      <MinusIcon width={ICON_SIZE} height={ICON_SIZE} />
    </TouchableOpacity>
  );
}

export default withTheme(memo(MinusButton));
