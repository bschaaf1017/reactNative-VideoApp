import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { newUser, password } from '../actions/login'


export default function LoginForm() {
  const [user, setUser] = useState('');
  const [pw, setPw] = useState('')
  const name = useSelector(state => state.user);
  // const pass = useSelector(state => state.pw);
  const dispatch = useDispatch();

  const changeUN = (name) => dispatch(newUser(name))
  const changePW = (word) => dispatch(password(word))

  return (
    <View style={styles.container}>
      <Text>{`Username: ${name} \n pw: ${pw}`}</Text>
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
          changeUN(user)
          changePW(pw)
          setPw('')
          setUser('')
        }}
        >
        <Text>LOGIN </Text>

      </TouchableOpacity>
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