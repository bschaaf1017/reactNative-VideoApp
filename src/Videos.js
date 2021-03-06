import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Button } from 'react-native';
import WebView from 'react-native-webview';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {newSearch} from './actions/login'
import apiKey from '../API_KEY'

import LoginForm from './components/LoginForm';

export default function LoginScreen() {
    const greet = 'Hello';
    const video = React.useRef(null);
    const [status, setStatus] = useState({});
    const [qParam, setQparam] = useState('');
    console.log(apiKey)
    const user = useSelector(state => {
        console.log(state)
        return state
    });
    const dispatch = useDispatch();

    const search = (query) => dispatch(newSearch(query));
  return (
    <View style={styles.container}>
      <Text style={styles.image} >
      <Image source={require('./superTV.png')} />
      </Text>
      <Text style={styles.greet}>{greet+' '+user.login.userName+'!'}</Text>
      <TextInput style={styles.textInput}
        value={qParam}
        clearButtonMode="always"
        placeholder="Search superTV..."
        onChangeText={text => setQparam(text)}
      />
      <TouchableOpacity
        style={styles.button}
        raised={true}
        onPress={() => {
          search(qParam)
          // props.nav.navigate('SearchVideos')
        }}
        >
        <Text style={styles.buttonText}>SEARCH </Text>
      </TouchableOpacity>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
{/* <iframe width="620" height="349" src="https://www.youtube.com/embed/W4sYQLEpJnA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },   
  image: {
    height: '20%'
  },
  greet: {
      color: 'white',
      fontSize: 20
  },
  textInput: {
    borderRadius: 4,
    height: 40,
    width: 190,
    borderColor: 'black',
    backgroundColor: 'white',
    paddingLeft: 10,
    marginTop: 10
  },
  button: {
    elevation: 8,
    backgroundColor: "#a9a9a9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
    marginTop: 39
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});