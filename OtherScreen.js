import React, { Component } from 'react';
import { View, Text,Button ,StyleSheet,StatusBar,AsyncStorage} from 'react-native';

class OtherScreen extends React.Component {
 static navigationOptions = ({ navigation }) => ({
        title: 'Other Screen',
        //headerLeft: <ToggleDrawerOption navigationProps={navigation} />,    
    })

    render() {
        return (
            <View style={styles.container}>
                <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

export default OtherScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});