import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NetworkDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataSource: []
        };
    }
    componentDidMount = () => {
        this.FetchData()
    }
    FetchData = () => {
        fetch('http://10.0.2.2/WcfService2/Service1.svc/Get')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({ DataSource: responseData })
                console.warn(this.state.DataSource)
            }).catch((error) => {
                console.warn(error)
            })
    }
    render() {
        return (
            <View>
                {
                    this.state.DataSource.map((item, index) => (
                        <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
                            <Text style={{width:'30%'}} key={index}>{item.id}</Text>
                            <Text style={{width:'30%'}} key={index}>{item.firstname}</Text>
                            <Text style={{width:'30%'}} key={index}>{item.lastname}</Text>
                        </View>
                    ))
                }
            </View>
        );
    }
}

export default NetworkDemo;
