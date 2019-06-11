import { SET_APP_VERSION_AND_BUILD, SET_LANGUAGE } from '../actionsList';

export const setLanguage = payload => ({ type: SET_LANGUAGE, payload });

export const setVersionAndBuild = payload => ({ type: SET_APP_VERSION_AND_BUILD, payload });
