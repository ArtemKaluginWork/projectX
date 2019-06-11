import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Clipboard, TouchableOpacity } from 'react-native';

import Message from '../Message';

function copyToClipboard(link) {
  Clipboard.setString(link);
}

function CopyLink({ children }) {
  return (
    <TouchableOpacity onPress={() => copyToClipboard(children)}>
      <Message>{children}</Message>
    </TouchableOpacity>
  );
}

CopyLink.propTypes = {
  children: PropTypes.string,
};

CopyLink.defaultProps = {
  children: null,
};

export default memo(CopyLink);
