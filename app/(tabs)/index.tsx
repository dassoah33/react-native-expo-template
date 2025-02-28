// app/(tabs)/index.tsx
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme';
import { Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/react-logo.png')}
      />
      <Text style={styles.title}>Contenu de la page d'accueil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.sizes.lg,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
});