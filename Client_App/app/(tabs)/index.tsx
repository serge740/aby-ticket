import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import '@/i18n';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized) {
      setIsReady(true);
    } else {
      const checkInit = setInterval(() => {
        if (i18n.isInitialized) {
          setIsReady(true);
          clearInterval(checkInit);
        }
      }, 50);
    }
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{  fontSize: 24 }}>{t('welcome')}</Text>
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />
      <Button title="Français" onPress={() => i18n.changeLanguage('fr')} />
      <Button title="Kinyarwanda" onPress={() => i18n.changeLanguage('rw')} />
    </View>
  );
}
