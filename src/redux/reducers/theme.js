import { Colors } from 'constants';

import { PURGE, UPDATE_THEME } from '../actionsList';


const INITIAL_STATE = {
  colors: Colors,
  currentColorsSet: Colors.defaultTheme,
  theme: 'defaultTheme',
  params: {
    saturation: 0,
    opacity: 0,
    lightness: 0,
  }
};

function theme(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case UPDATE_THEME: {
      return {
        ...state,
        theme: payload,
        currentColorsSet: Colors[theme],
      };
    }
    default: return state;
  }
}

export default theme;
