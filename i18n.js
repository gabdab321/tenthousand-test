import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/en.json';
import arTranslations from './locales/ar/ar.json';
import i18n from "i18next";

// Initialize i18next
i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTranslations,
            },
            ar: {
                translation: arTranslations,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        compatibilityJSON: 'v3',
    });

export default i18n;