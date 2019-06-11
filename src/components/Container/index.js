import React, { memo } from 'react';
import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AnimatedGradient from 'components/AnimatedGradient';
import styles from './styles';


function Container({ children, style }) {
  return (
    <SafeAreaView style={[styles.main, style]}>
      <AnimatedGradient style={styles.gradient} />
      {children}
    </SafeAreaView>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  style: ViewPropTypes.style,
};

Container.defaultProps = {
  children: null,
  style: null,
};


export default memo(Container);
