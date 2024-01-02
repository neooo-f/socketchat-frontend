import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import de from './locales/de/translation.json';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import it from './locales/it/translation.json';

export const DEFAULT_LANGUAGE = 'en';

export type LANGUAGE_IDENTIFIER = 'de' | 'en' | 'fr' | 'it';

export enum LanguageEnum {
  DE = 'de',
  EN = 'en',
  FR = 'fr',
  IT = 'it',
}

export const LANGUAGES: LanguageEnum[] = [
  LanguageEnum.DE,
  LanguageEnum.EN,
  LanguageEnum.FR,
  LanguageEnum.IT,
];

i18n
  //   .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    partialBundledLanguages: true,
    fallbackLng: 'en',
    debug: false,
    returnNull: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      de: {
        translation: de,
      },
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
      it: {
        translation: it,
      },
    },
    // ns: ['common']
  });

export default i18n;
