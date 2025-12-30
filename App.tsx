import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { TamaguiProvider } from 'tamagui';
import Form from './src/components/Form';
import config from './tamagui.config';
// App with Tamagui Form component
const App: React.FC = () => {
  return (
    <TamaguiProvider config={config} defaultTheme="light">

      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />
          <View style={styles.header}>
            <Text style={styles.title}>Tamagui Form</Text>
            <Text style={styles.subtitle}>React Native</Text>
          </View>
          <View style={styles.content}>
            <Form size="$4" />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  header: {
    backgroundColor: '#7C3AED',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 14,
    color: '#E9D5FF',
    marginTop: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterCard: {
    backgroundColor: '#1E293B',
    padding: 40,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    minWidth: 250,
  },
  label: {
    fontSize: 12,
    color: '#94A3B8',
    letterSpacing: 2,
    marginBottom: 8,
  },
  counter: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 40,
    gap: 24,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  circleButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#94A3B8',
  },
});

export default App;