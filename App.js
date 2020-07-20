import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outText, setOutputText] = useState("Open up App.js to start working on your app!");
  return (
    <View style={styles.container}>
      <Text>{outText}</Text>
      <Text>Hello Jamal</Text>
      <Button title="change Text" on Press={() => setOutputText("Text Changed presseds") }  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
