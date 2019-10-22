import React, { Component } from 'react';
import { View, Text,AsyncStorage,Button } from 'react-native';

class Logout extends Component {
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
        <Text> Logout </Text>
        <Button title="Logout" onPress={()=>this._signOutAsync()}></Button>

      </View>
    );
  }
}

export default Logout;
