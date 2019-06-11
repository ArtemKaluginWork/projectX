import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { height, width } = Dimensions.get('window');


export default {
  window: {
    height,
    width,
  },
  statusBarHeight: getStatusBarHeight(),
};
