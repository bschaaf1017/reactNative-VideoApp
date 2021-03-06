import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import LoginForm from './components/LoginForm';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>
        <Image source={require('./superTV.png')} style={styles.image} />
      </Text>
      <LoginForm  nav={navigation}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});