import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Bar() {
    return (
        <View style={styles.container}>
          <TextInput style={styles.textInput}
            placeholder="Username"
          />
          <Text>{'\n'}</Text>
          <TextInput style={styles.textInput}
            placeholder="Password"
          />
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