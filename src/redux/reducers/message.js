import { PURGE, UPDATE_MESSAGE } from '../actionsList';

const INITIAL_STATE = {
  text: 'Initial message',
};

function message(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case UPDATE_MESSAGE: {
      return {
        ...state,
        text: payload.text,
      };
    }
    default: return state;
  }
}

export default message;
