import {
  SET_CURRENCY_CODE,
  SET_CURRENCY_NAME,
  SET_CURRENCY_VALUE,
} from '../actionsList';

export const setCurrencyCode = payload => ({ type: SET_CURRENCY_CODE, payload });

export const setCurrencyName = payload => ({ type: SET_CURRENCY_NAME, payload });

export const setCurrencyValue = payload => ({ type: SET_CURRENCY_VALUE, payload });
