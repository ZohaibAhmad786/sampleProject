import React, { Component } from 'react';
import { View, Text, Picker, Alert } from 'react-native';
import ToggleDrawerOption from './ToggleDrawerOption';
import { isTerminatorless } from '@babel/types';

class PickerDemo extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Picker Activity',
    headerLeft: <ToggleDrawerOption navigationProps={navigation} />,

    headerStyle: {
      backgroundColor: '#0091EA'
    },
    headerTintColor: '#fff',

  })
  constructor(props) {
    super(props);
    this.state = {
      pcikerValueGender: '',
      Student: [{ name: 'Ali', check: false }, { name: 'Ahmad', check: false }, { name: 'Khan', check: false }, { name: 'Arshad', check: true }]
    };
  }

  render() {
    return (
      <View>
        <Text> PickerDemo </Text>
        <Picker
          style={{ width: 300 }}
          selectedValue={this.state.pcikerValueGender}
          onValueChange={(item1, index) => {

            this.setState({ pcikerValueGender: item1 })
            Alert.alert(
              "Title",
              "Body",
              [
                { text: 'Ask me later', onPress: () => console.warn('Ask me later pressed') },
                {
                  text: 'Cancel',
                  onPress: () => console.warn('Cancel Pressed'),
                  style: 'cancel',
                },
                { text: 'OK', onPress: () => console.warn('OK Pressed') },
              ],
              { cancelable: false },
            )
          }}
        >
          <Picker.Item label='Non' value='Non'></Picker.Item>
          {
            this.state.Student.map((item, index) => (

              <Picker.Item label={item.name} value={item.name}></Picker.Item>

            ))
          }
        </Picker>
        {/* <Picker
          selectedValue={this.state.pcikerValueGender}
          onValueChange={(item, index) => {
            this.setState({ pcikerValueGender: item })
            console.warn(item)
          }}>
          <Picker.Item value='Ahmad' label='Ahmad'></Picker.Item>
          <Picker.Item value='Amjad' label='Amjad'></Picker.Item>
          <Picker.Item value='Khan' label='Khan'></Picker.Item>
          <Picker.Item value='ALi' label='Ali'></Picker.Item>
        </Picker> */}
      </View>
    );
  }
}

export default PickerDemo;
