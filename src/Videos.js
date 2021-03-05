import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {newSearch} from './actions/login'
import apiKey from '../API_KEY'

import LoginForm from './components/LoginForm';

export default function LoginScreen() {
    const greet = 'Hello'
    console.log(apiKey)
    const user = useSelector(state => {
        console.log(state)
        return state.login
      });
  return (
    <View style={styles.container}>
      <Text>
      <Text style={styles.greet}>{greet}</Text>
      <Image source={require('./superTV.png')} style={styles.image} />
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },   
  greet: {
      color: 'white',
  }
});