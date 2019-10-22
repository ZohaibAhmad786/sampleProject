import React, { Component } from 'react';
import { View, Text,AsyncStorage,Button } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _SetItem=()=>{
    AsyncStorage.setItem('Email','abc');
    this.props.navigation.navigate('Home');
    }
  render() {
    return (
      <View>
        <Text> Login </Text>
        <Button title="Login" onPress={()=>this._SetItem()}></Button>
      </View>
    );
  }
}

export default Login;
