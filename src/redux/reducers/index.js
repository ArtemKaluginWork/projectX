import { combineReducers } from 'redux';

import currency from './currency';
import message from './message';
import settings from './settings';
import theme from './theme';

export default combineReducers({
  currency,
  message,
  settings,
  theme,
});
