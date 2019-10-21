import React, { Component } from 'react';
import { View, Text ,Dimensions} from 'react-native';
import  {createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';
import  {createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import MyDrawer from '../sampleProject/MyDrawer'
import PickerDemo from './PickerDemo';
import CheckBoxDemo from './CheckBoxDemo';

const DrawerPages=createStackNavigator({
CheckBoxDemo:CheckBoxDemo,

PickerDemo:PickerDemo
},

)
const MyDrawerOptions = createDrawerNavigator({
    DrawerPages: DrawerPages
  
  }, {

    
      navigationOptions: {
       headerMode: 'none'
      },
      contentComponent: MyDrawer,
      drawerWidth: Dimensions.get('window').width - 130,
      drawerPosition:'left',
      drawerType:'slide',
      

    
});

const DrawerTabs = createStackNavigator({
    Welcome: {
      screen: MyDrawerOptions,
    }
  },
    {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
export default createAppContainer(DrawerTabs);

