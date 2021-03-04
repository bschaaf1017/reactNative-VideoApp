import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import LoginForm from './components/LoginForm';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    // alignItems: 'center',
    // justifyContent: 'center',
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