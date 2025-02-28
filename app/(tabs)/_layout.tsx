// app/(tabs)/_layout.tsx - Modification
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.mediumGray,
        tabBarLabelStyle: {
          fontWeight: '500',
        },
        tabBarStyle: {
          backgroundColor: theme.navigation.tabBar.backgroundColor,
          borderTopColor: theme.navigation.tabBar.borderColor,
        },
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,
          height: theme.navigation.header.height,
        },
        headerTintColor: theme.navigation.header.titleColor,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: theme.navigation.header.titleSize,
        },
      }}>
        <Tabs.Screen 
          name="index" 
          options={{
            title: "Accueil",
            headerTitle: "APP EXAMPLE",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name="settings" 
          options={{
            title: "Paramètres",
            headerTitle: "Paramètres",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}