import React, { Component } from 'react';
import { View, Text,Button,AsyncStorage } from 'react-native';

class Home123 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('SignIn');
};
  render() {
    return (
      <View>
        <Text> Home123 </Text>
        <Button title="Logout" onPress={()=>this._signOutAsync()}></Button>
      </View>
    );
  }
}

export default Home123;
