import React, { Component } from 'react';
import { View, Text, SectionList, FlatList,TextInput, Button, Image, TouchableOpacity, ScrollView, Alert, RefreshControl } from 'react-native';
import { green } from 'colorette';
import Swipeout from "react-native-swipeout";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.dataarray = ["Ahmad", "Khan", "Usman"];
    this.state = {
      newarr: [],
      textdata: '',
      mydata:[]
    };
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
  componentDidMount = () => {
    this.setState({ newarr: [...this.dataarray] })
    this.getData()
  }
  getData = () => {
    fetch('http://10.0.2.2/WcfService2/Service1.svc/Get').
      then((response) => response.json()).
      then((responseData) => {
        this.setState({ mydata: responseData })
      }).catch((err) => {
        console.warn(err)
      })
  }
  PostArray = () => {
    try {
      fetch('http://10.0.2.2/WcfService2/Service1.svc/PostArray', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.dataarray)
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.warn(responseData);
          console.warn(`Data is :  ${responseData}`)
        })
        .catch((err) => {
          console.log("Error" + err);
        })
    } catch (error) {
      alert(error)
    }
  }
  JoinData = (item) => {
    console.warn(item)
    this.dataarray.push(item)
    this.setState({ newarr: [...this.dataarray] })
    this.PostArray()

  }
  DispData = (item) => {
    alert(` Name of Student : ${item}`)
  }
  _Refresh = () => {
    this.setState({ refreshing: true })
    this.PostArray().then(() => {
      this.setState({ refreshing: false })
    })
  }
  render() {

    return (
      <View style={{ justifyContent: 'center' }}>
        <View style={{ borderWidth: 1, borderColor: 'red' }}>
          <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
            style={{ width: 400, height: 200 }} />
        </View>

        <View style={{ margin: 10, }}>
          <TextInput placeholder='Enter Student name'
            style={{ borderColor: 'green', borderRadius: 20, borderWidth: 4 }}
            onChangeText={txt => this.setState({ textdata: txt })}></TextInput>

          <Button title='Display Data' onPress={() => this.JoinData(this.state.textdata.toString())}></Button>
        </View>
        <FlatList
          data={this.state.mydata}
          extraData={this.state.mydata}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._Refresh.bind(this)}>
            </RefreshControl>
          }
          // renderSectionHeader={({ section }) => <Text style={{ backgroundColor: 'red', fontSize: 20, alignItems: 'center' }}>{section.title}</Text>}
          renderItem={({ item, index }) =>
            <Swipeout{...{
              autoClose: true,
              right: [
                {
                  onPress: () => {
                    const deletingRow = this.state.activeRowKey;
                    Alert.alert(

                      'Delete Subject',
                      'Are you want to Delete',
                      [
                        { text: 'No', style: 'cancel' },
                        {
                          text: 'Yes', onPress: () => {
                            this.state.mydata.splice(index, 1);
                            this.setState(() => {
                              return {
                                deleteRowKey: deletingRow
                              }
                            })
                          }
                        }
                      ],
                      { cancelable: true }
                    );
                  },
                  text: 'Delete', type: 'delete'
                }
              ],

            }
            } >
              <View>
                <TouchableOpacity onPress={() => this.DispData(item.email)}>
                  <Text  style={{fontSize:22}}>{item.lastname}</Text>
                </TouchableOpacity>
              </View>
            </Swipeout>
          }
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>

      </View>

    );
  }
}

