import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Platform } from 'react-native';
import Locale from 'react-native-locale';

import { AvailableLanguages, INITIAL_LANGUAGE } from 'constants';
import en from './locales/en';
import ru from './locales/ru';

const { localeIdentifier = '', preferredLanguages = [''] } = Locale.constants();
const lng = Platform.select({
  android: localeIdentifier.slice(0, 2),
  ios: preferredLanguages[0].slice(0, 2),
});

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => callback(lng),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en,
      ru,
    },
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackLng: INITIAL_LANGUAGE,
    lng,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      wait: true,
    },
  });

i18n.languages = AvailableLanguages;

export default i18n;
