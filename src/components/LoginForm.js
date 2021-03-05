import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { newUser, password } from '../actions/login'


export default function LoginForm(props) {
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
        // defaultValue={user}
        autoFocus={true}
        clearButtonMode="always"
        placeholder="Username"
        onChangeText={text => setUser(text)}
      />
      <Text>{'\n'}</Text>
      <TextInput style={styles.textInput}
        // defaultValue={pw}
        clearButtonMode="always"
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
          props.nav.navigate('SearchVideos')
        }}
        style={styles.button}
        >
        <Text style={styles.buttonText}>LOGIN </Text>
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 25,
        // // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center"
    },
    textInput: {
        borderRadius: 4,
        height: 40,
        width: 190,
        borderColor: 'black',
        backgroundColor: 'white',
        paddingLeft: 10
    },
    button: {
      elevation: 8,
      backgroundColor: "#a9a9a9",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
})