import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>

      <Image source={require('./superTV.png')} style={styles.image} />
      </Text>
      <TouchableOpacity 
        style={styles.button}
        raised={true}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>LOGIN </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '45%'
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
});