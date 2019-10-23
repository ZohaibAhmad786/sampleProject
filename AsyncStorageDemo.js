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
import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import PickerDemo from './PickerDemo';
import CheckBoxDemo from './CheckBoxDemo';
import NetworkDemo from './NetworkDemo';

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
                <ActivityIndicator size='large'/>
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
    home: HomeScreen,
    NetworkDemo: NetworkDemo,
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
        App: BottomTabs,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));


