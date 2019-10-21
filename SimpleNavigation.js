import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class App extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('Title', 'Default Title'),
    };
  };

  changeTitleText = () => {

    var that = this;
    that.props.navigation.setParams({
      Title: 'New Activity Title'
    });

  }

  render() {
    return (
      <View style={styles.MainContainer}>

        <TouchableOpacity style={styles.button} onPress={this.changeTitleText.bind(this)}>

          <Text style={styles.text}>Click Here to Change The Activity Action Bar Screen Title Text</Text>

        </TouchableOpacity>

      </View>
    );
  }
}

const Root = createStackNavigator(
  {
    Home: App
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Root);

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {

    width: '80%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#00BCD4',
    borderRadius: 7,
    margin:10
  },
  text: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    padding: 10
  }
});