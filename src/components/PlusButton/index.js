import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';

import PlusIcon from 'assets/svg/plus-circle.svg';

const ICON_SIZE = 100;

function PlusButton(props) {
  return (
    <TouchableOpacity {...props}>
      <PlusIcon width={ICON_SIZE} height={ICON_SIZE} />
    </TouchableOpacity>
  );
}

export default memo(PlusButton);
