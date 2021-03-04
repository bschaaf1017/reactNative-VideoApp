import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>superTV</Text>
      <TouchableOpacity 
        style={styles.button}
        raised={true}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text>LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
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
  },
  button: {
    backgroundColor: "#DDDDDD",
  }
});