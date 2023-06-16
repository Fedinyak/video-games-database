import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resources from './resources'

// eslint-disable-next-line functional/no-expression-statements
void i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    },
    debug: true
  })

export default i18next
