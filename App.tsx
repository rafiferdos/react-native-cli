import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Rafi, Congratulations!</Text>
      <Button title="View profile" onPress={() => console.log('View profile')} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
    color: 'cyan',
    fontWeight: 'bold',
  },
})