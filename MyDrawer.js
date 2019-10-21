import React, { Component } from 'react';

import { StyleSheet, Platform, View, Text, Image, TouchableHighlight, TouchableOpacity, YellowBox ,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class MyDrawer extends React.Component {

  render() {

    return (
      <TouchableOpacity activeOpacity={1} style={styles.drawerTransparent} onPress={()=>this.props.navigation.goBack()}>
        <TouchableOpacity activeOpacity={1} >
          <ScrollView>
            <View style={styles.header}>
              <Image source={require('./Asset/Menu.png')} style={styles.sideMenuProfileIcon} />
              <Text style={[styles.text, { color: 'white' }]}>
                Zohaib
              </Text>
              <Text style={[styles.text, { color: 'white' }]}>
                Ahmad
              </Text>
            </View>

            <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'}>
              <View style={styles.row}>
              <Image source={require('./Asset/CheckBocx.png')}         style={styles.sideMenuIcon} />
              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('CheckBoxDemo') }} >CheckBox Activity</Text>
              </View>
            </TouchableHighlight>

            

            <View style={{ width: '90%', height: 1, backgroundColor: 'gray', margin: 10 }} />

            <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'}>
              <View style={styles.row}>
              <Image source={require('./Asset/Picker.png')}         style={styles.sideMenuIcon} />
              <Text style={styles.text} onPress={() => { this.props.navigation.navigate('PickerDemo') }} > Picker Activity </Text>
              </View>
            </TouchableHighlight>

            
          </ScrollView>
        </TouchableOpacity>
      </TouchableOpacity>

    );
  }
}

export default MyDrawer;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    alignItems: 'center',
    justifyContent: 'center',

  },

  sideMenuContainer: {

    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },

  sideMenuProfileIcon:
  {
    marginTop:5,
    //resizeMode: 'center',
    width: 90,
   marginLeft:'32%',
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 2,
    alignSelf: 'stretch',
    borderColor: 'rgba(0,0,0,0.4)',
  },

  sideMenuIcon:
  {
    resizeMode: 'center',
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: 20

  },

  menuText: {

    fontSize: 15,
    color: '#222222',

  },
  drawerTransparent:{
    flex:1,
    backgroundColor:'transparent'
  },
  header:{
    width:'100%',
    backgroundColor:'#6195ff',
    alignItems:'center',
    justifyContent:'center',
    padding:4,
    marginBottom: 4,
  }
  ,row:{
    flexDirection:'row',
    paddingVertical: 8,
    paddingLeft: 5,
  },
  text:{
    color:'#111',
    marginLeft:10,
    fontWeight: 'bold',
    fontSize:15
  }

});