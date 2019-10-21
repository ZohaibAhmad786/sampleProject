import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MyApp extends Component {
    static navigationOptions = {
        title: 'My App Activity',
      }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MyApp </Text>
      </View>
    );
  }
}

export default MyApp;
