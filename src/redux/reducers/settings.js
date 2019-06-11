import { PURGE, SET_LANGUAGE, SET_APP_VERSION_AND_BUILD } from '../actionsList';

import { version, build } from '@/app.json';

const INITIAL_STATE = {
  language: null,
  version,
  build,
};

function settings(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case SET_LANGUAGE: {
      return {
        ...state,
        language: payload,
      };
    }
    case SET_APP_VERSION_AND_BUILD: {
      return {
        ...state,
        version: payload.version,
        build: payload.build,
      };
    }
    default: return state;
  }
}

export default settings;
