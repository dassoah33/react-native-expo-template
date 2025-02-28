// app/_layout.tsx - Modification
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MobileMenu from './components/MobileMenu';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Stack screenOptions={{ 
        headerShown: false,
      }} />
      <MobileMenu />
    </View>
  );
}