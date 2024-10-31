import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enJSON from '@/locales/en/en.json';
import ptBRJSON from '@/locales/pt-BR/pt-BR.json';

const i18nInstance = i18n.createInstance();

const i18nConfig: InitOptions = {
  debug: true,
  fallbackLng: 'en',
  lng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: { ...enJSON },
    },
    'pt-BR': {
      translation: { ...ptBRJSON },
    },
  },
};

i18nInstance.use(initReactI18next).init(i18nConfig);

export default i18nInstance;
