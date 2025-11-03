import React from 'react';
import { View, Text, Button } from 'react-native';
import '@/i18n'; // <-- this runs your i18n config
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{color:'white'}}>{t('welcome')}</Text>
      <Button title="English" onPress={() => i18n.changeLanguage('en')} />
      <Button title="Español" onPress={() => i18n.changeLanguage('es')} />
    </View>
  );
}
