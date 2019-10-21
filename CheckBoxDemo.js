import React, { Component } from 'react';
import { View, Text, CheckBox, FlatList } from 'react-native';
import ToggleDrawerOption from './ToggleDrawerOption';

class CheckBoxDemo extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'CheckBox Activity',
        headerLeft: <ToggleDrawerOption navigationProps={navigation} />,
        
        headerStyle: {
            backgroundColor: '#0091EA'
        },
        headerTintColor: '#fff',
    
    })
    constructor(props) {
        super(props);
        this.state = {
            newarr: [],
            Student: [{ name: 'Ali', check: false }, { name: 'Ahmad', check: false }, { name: 'Khan', check: false }, { name: 'Arshad', check: true }]
        };
        this.newArr = [];
    }
    componentDidMount = () => {
        this.setState({ newarr: [...this.state.Student] })
    }
    ChangeState = (index) => {
        console.warn(this.state.Student[index].check)
        if (this.state.Student[index].check === true) {
            this.state.Student[index].check = false;
        } else if (this.state.Student[index].check === false) {
            this.state.Student[index].check = true;
        }
        console.warn(this.state.Student[index].check + "" + JSON.stringify(this.state.Student))
        this.setState({ newarr: [...this.state.Student] })

    }
    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                    margin: 5
                }}
            />
        );
    }
    render() {
        return (
            <View style={{ justifyContent: 'center' }}>

                <FlatList
                    data={this.state.newarr}
                    extraData={this.state.newarr}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={({ item, index }) =>
                        <View >

                            <CheckBox value={item.check === true ? true : false} onChange={() => this.ChangeState(index)}></CheckBox>

                        </View>
                    }
                    keyExtractor={(item1, index1) => index1.toString()}
                ></FlatList>
            </View>
        );
    }
}

export default CheckBoxDemo;
