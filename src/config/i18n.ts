import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import english from '../locales/en.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: english,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
  })

export { i18n }
