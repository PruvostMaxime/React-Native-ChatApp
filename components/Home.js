import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,TextInput,TouchableOpacity } from 'react-native';

import {
  Actions,
} from 'react-native-router-flux';

export default class Home extends React.Component {
  state = {
    username: '',
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
          <Image style={styles.logo}
          source={require('../images/Risilog.png')} />
          <Text style={styles.title}>RisiChat</Text>
          <Text style={styles.title}>version 1.0.0</Text>
            <Text style={styles.header}>Pseudo</Text>
              <TextInput placeholder="Risitas la chancla"
              autoCorrect={false}
              returnKeyType="next"
              underlineColorAndroid='transparent'
              style={styles.input}
              onChangeText={(text) =>{this.setState({username:text,});}}value={this.state.username}/>
            <TouchableOpacity style={styles.buttondesign} onPress={() => {
                Actions.chat({username: this.state.username,});
              }}>
                    <Text style={styles.buttontext}>Login</Text>
              </TouchableOpacity>

      </View>
  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  logocontainer: {
    flexGrow:1,
    alignItems: "center",
    marginTop:25
  },
  logo: {
    width:150,
    height:150
  },
  title: {
    textAlign: "center",
    color: "white",
    width:170,
    fontSize:22,
    marginTop:10,
  },
  input: {
  height: 35,
  backgroundColor: 'rgba(255,255,255,0.2)',
  color: '#FFF',
  width:270

  },
  buttondesign: {
    borderStyle: "solid",
    borderRadius:100,
    borderColor: "black",
    borderWidth:2,
    width:200,
    marginTop:20
  },
  buttontext: {
    paddingTop:10,
    paddingBottom:10,
    textAlign: "center",
    color:"#FFFFFF"
  },
  header: {
    marginTop:50,
    fontSize:19,
    color:"white"
  }
});
