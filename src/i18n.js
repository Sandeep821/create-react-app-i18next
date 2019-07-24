import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import BackendAdapter from "i18next-multiload-backend-adapter";
import XHR from "i18next-xhr-backend";


import translationEN from './trans/en/translation';
import translationDE from './trans/de/translation';

// the translations
const resourceContent = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
 // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(BackendAdapter)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['description', 'common'],
    defaultNS: 'description',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      backend: XHR,
      backendOption: {
        loadPath: "./locales/{{lng}}/translation.json",
        addPath: "./locales/{{lng}}/translation.json",
        allowMultiLoading: true,
        crossDomain: true
      }
    },
    keySeparator: true
  });


export default i18n;