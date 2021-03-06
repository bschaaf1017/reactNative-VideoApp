import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { newUser, password } from '../actions/login'


export default function LoginForm() {
  const [user, setUser] = useState('');
  const [pw, setPw] = useState('');
  const pass = useSelector(state => {
    return state.login
  });
  const dispatch = useDispatch();

  const changeUN = (name) => dispatch(newUser(name))
  const changePW = (word) => dispatch(password(word))

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        value={user}
        placeholder="Username"
        onChangeText={text => setUser(text)}
      />
      <Text>{'\n'}</Text>
      <TextInput style={styles.textInput}
        value={pw}
        placeholder="Password"
        onChangeText={text => setPw(text)}
      />
      <Text>{'\n'}</Text>
      <TouchableOpacity
        onPress={() => {
          changePW(pw)
          changeUN(user)
          setUser('')
          setPw('')
        }}
        >
        <Text>LOGIN </Text>

      </TouchableOpacity>
      <Text>{pass.password}</Text>
      <Text>{pass.userName} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 25,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        borderRadius: 4,
        height: 40,
        width: 190,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingLeft: 10
    }
})