import React, { Component } from 'react';
import { View, Text ,TextInput,Button,AsyncStorage,StyleSheet,ActivityIndicator,StatusBar} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home123 from './Home123';
import Logout from './Logout';
import Login from './Login';

// class AsyncStorageDemo2 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         txtData:'',
//         AsyncData:''
//     };
//   }
// _SetItem=(item)=>{
// AsyncStorage.setItem('Email',this.state.txtData);
// console.warn("Data set "+this.state.txtData)
// }
// _getItem=()=>{
// AsyncStorage.getItem('Email').then((data)=>{
//     this.setState({AsyncData:data})
//     console.warn("Data Get "+this.state.AsyncData)
// })
// }
//   render() {
//     return (
//       <View>
//         <Text> AsyncStorageDemo2 </Text>
//         <TextInput placeholder="Enter Email" onChangeText={(txt)=>this.setState({txtData:(txt)})}></TextInput>
//         <Button title="get Data" onPress={()=>this._getItem()}></Button>
//       </View>
//     );
//   }
// }

class AsyncStorageDemo2 extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync()
    }
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('Email');

        console.warn(userToken);
        this.props.navigation.navigate(userToken !== null ? 'App' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="dark-content" backgroundColor='red' />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AppStack = createStackNavigator({ Home: Home123, Other: Logout });
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AsyncStorageDemo2,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));
// export default AsyncStorageDemo2;
