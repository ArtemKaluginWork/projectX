import {
  PURGE,
  SET_CURRENCY_CODE,
  SET_CURRENCY_NAME,
  SET_CURRENCY_VALUE,
} from '../actionsList';

const INITIAL_STATE = {
  code: null,
  name: null,
  value: null,
};

function currency(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case PURGE: {
      return { ...INITIAL_STATE };
    }
    case SET_CURRENCY_CODE: {
      return {
        ...state,
        code: payload,
      };
    }
    case SET_CURRENCY_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case SET_CURRENCY_VALUE: {
      return {
        ...state,
        value: payload,
      };
    }
    default: return state;
  }
}

export default currency;
