import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image ,StyleSheet} from 'react-native';

class ToggleDrawerOption extends React.Component {

    toggleDrawer = () => {
  
      console.log(this.props.navigationProps);
      this.props.navigationProps.toggleDrawer();
  
    }
  
    render() {
  
      return (
  
        <View style={{ flexDirection: 'row' }}>
  
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
  
            <Image
              source={require('./Asset/Menu.png')}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
  
          </TouchableOpacity>
  
        </View>
  
      );
  
  
    }
  }

export default ToggleDrawerOption;
