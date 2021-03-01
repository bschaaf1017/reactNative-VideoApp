import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [input, setInput] = React.useState('Search Videos...')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <TextInput style={styles.textInput}
      onChangeText={text => setInput(text)}
      value={input}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  textInput: {
    borderRadius: 4,
    height: 40,
    width: 150,
    borderColor: 'black',
    backgroundColor: 'white'
  }
});
