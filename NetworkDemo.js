import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';

var parameterData='';
class NetworkDemo extends Component {
    static navigationOptions = {
        title: 'Network Demo',
    };
    constructor(props) {
        super(props);
        this.state = {
            DataSource: [],
            ShowMe: true
        };
    }
    componentDidMount = () => {
        console.warn(parameterData.name)
        this.FetchData()
        setTimeout(() => {
            this.setState({ ShowMe: false })
        }, 3000)
        
    }
    FetchData = async () => {
        const response = await fetch('http://10.0.2.2/WcfService2/Service1.svc/Get');
        const responseData = await response.json();
        this.setState({ DataSource: responseData });

    }
    render() {
        var { navigation } = this.props;
        parameterData=navigation.getParam('parameters', 'No paramter pass ');
        return (
            <View>

                <ScrollView>

                    {
                        this.state.ShowMe ? <ActivityIndicator /> 
                        :
                        this.state.DataSource.map((item, index) => (

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                                <Text style={{ width: '30%' }} key={index}>{item.id}</Text>
                                <Text style={{ width: '30%' }} key={index}>{item.firstname}</Text>
                                <Text style={{ width: '30%' }} key={index}>{item.lastname}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default NetworkDemo;
