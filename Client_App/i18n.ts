import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './locales/en.json';
import fr from './locales/fr.json';
import rw from './locales/rw.json';

// Define your available translations
export const resources = {
  en: { translation: en },
  fr: { translation: fr },
  rw: { translation: rw },
} as const;

export type Language = keyof typeof resources;

const LANGUAGE_KEY = 'user-language';

// Async initialization function
async function initI18n() {
  try {
    const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
    const deviceLang = Localization.locale.split('-')[0] as Language;

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
    console.error('❌ i18n initialization failed:', error);
  }
}

// Save language whenever it changes
i18n.on('languageChanged', (lng) => {
  AsyncStorage.setItem(LANGUAGE_KEY, lng).catch((err) =>
    console.error('Failed to save language', err)
  );
});

// Run initialization
initI18n();

export default i18n;
