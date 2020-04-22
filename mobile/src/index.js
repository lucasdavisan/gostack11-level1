import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// There is not semantic value
// There is not a own styling
// All components have by default "display: flex"

// View: div, footer, header, main, aside section
// Text: p, span, strong, h1, h2, h3

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello GoStack</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#7159c1',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    color:'#FFF',
    fontSize: 32,
    fontWeight: 'bold'
  },
});