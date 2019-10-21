
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator, } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import About from './About';
import Home from './Home';
import MyApp from './MyApp';

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;

  if (routeName === 'StackWork') {
    return (

      <Image
        source={require('./Asset/home.png')}
        style={{ width: 20, height: 20 }} />
    );
  } else if (routeName === 'About') {
    return (
      <Image
        source={require('./Asset/home.png')}
        style={{ width: 20, height: 20 }} />
    );
  }

};

const StackWork= createStackNavigator(
  {
    Home: Home,
    MyApp:MyApp
  },
  {
    initialRouteName: "Home"
  }
);
export default createAppContainer(
  createBottomTabNavigator(
    {
      StackWork: StackWork,
      About: About,
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  )
);