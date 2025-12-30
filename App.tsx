import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// Pure React Native counter - no Tamagui, to verify app works
const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#7C3AED" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Counter App</Text>
          <Text style={styles.subtitle}>React Native</Text>
        </View>

        {/* Counter Display */}
        <View style={styles.content}>
          <View style={styles.counterCard}>
            <Text style={styles.label}>CURRENT COUNT</Text>
            <Text style={[styles.counter, { color: count >= 0 ? '#7C3AED' : '#EF4444' }]}>
              {count}
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonRow}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.circleButton, { backgroundColor: '#10B981' }]}
                onPress={() => setCount(c => c - 1)}
              >
                <Text style={styles.buttonText}>−</Text>
              </Pressable>
              <Text style={styles.buttonLabel}>Decrease</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.circleButton, { backgroundColor: '#64748B' }]}
                onPress={() => setCount(0)}
              >
                <Text style={styles.buttonText}>↺</Text>
              </Pressable>
              <Text style={styles.buttonLabel}>Reset</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Pressable
                style={[styles.circleButton, { backgroundColor: '#7C3AED' }]}
                onPress={() => setCount(c => c + 1)}
              >
                <Text style={styles.buttonText}>+</Text>
              </Pressable>
              <Text style={styles.buttonLabel}>Increase</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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