import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import es from './locales/es.json';

// Define available resources
export const resources = {
  en: { translation: en },
  es: { translation: es },
} as const;

export type Language = keyof typeof resources;

const LANGUAGE_KEY = 'user-language';

// Async function to load saved language
async function initI18n() {
  try {
    const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
    const deviceLang = Localization.locale?.split('-')[0] as Language;

    await i18n
      .use(initReactI18next)
      .init({
        resources,
        lng: (savedLang as Language) || deviceLang || 'en',
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
      });

    console.log('✅ i18n initialized with language:', i18n.language);
  } catch (error) {
    console.error('❌ i18n init failed:', error);
  }
}

// Listen for language changes and save them
i18n.on('languageChanged', (lng) => {
  AsyncStorage.setItem(LANGUAGE_KEY, lng).catch((err:any) =>
    console.error('Failed to save language', err)
  );
});

// Initialize immediately
initI18n();

export default i18n;
