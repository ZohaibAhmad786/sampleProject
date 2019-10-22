import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import OtherScreen from './OtherScreen';


class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in!" onPress={this._signInAsync} />
            </View>
        );
    }
    componentDidMount = async () => {
        console.warn(await AsyncStorage.getItem('userToken'));
    }
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = async () => {
        this.props.navigation.navigate('Other');
        console.warn(await AsyncStorage.getItem('userToken'));

    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}



class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }
    
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');

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
const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;

    if (routeName === 'Home') {
        return (

            <Image
                source={require('./Asset/home.png')}
                style={{ width: 20, height: 20 }} />
        );
    } else if (routeName === 'Other') {
        return (
            <Image
                source={require('./Asset/home.png')}
                style={{ width: 20, height: 20 }} />
        );
    }

};
const HomeScreen1 = createStackNavigator({
    home: HomeScreen
})
const OtherScreen1 = createStackNavigator({
    other: OtherScreen
})
const AppStack2 = createBottomTabNavigator(
    {
        Home: HomeScreen1,
        Other: OtherScreen1
    }, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
            getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});
const BottomTabs = createStackNavigator({
    Welcome: {
        screen: AppStack2,
    }
},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
)

// const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack2,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


