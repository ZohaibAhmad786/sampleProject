import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
const options = {
  title: 'Select Photo',
  takePhotoButtonTitle: "Camera",
  chooseFromLibraryButtonTitle: 'Library'
};
var dataSource = [{ userName: 'Akram', userImage: 'asd' },{ userName: 'ahmad', userImage: 'asd' }]
class Home extends Component {
  static navigationOptions = {
    title: 'Home1',
  }
  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      Data: []
    };
  }
  componentDidMount = () => {
    this.getData()
    
 
  }
  getData = () => {
    fetch('http://10.0.2.2/WcfService2/Service1.svc/OnlyOneRecord').
      then((response) => response.json()).
      then((responseData) => {
        this.setState({ Data: responseData })
        console.warn(this.state.Data)
      }).catch((err) => {
        console.warn(err)
      })
  }
  PostDataThroughApi = () => {
    //dataSource.userImage = this.state.avatar;
    //dataSource.userName = "Ahmad";
    try {
      fetch('http://10.0.2.2/WcfService2/Service1.svc/PostData', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataSource)
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
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Text>this is  Home Activity </Text>
        <TouchableOpacity onPress={()=>this.props.natvigation.navigate('MyApp')}>
          <Text>Display Warn Message</Text>
        </TouchableOpacity>
        <Button title='Post Data Request' onPress={this.PostDataThroughApi}></Button>
        <Button title="Upload Picture" onPress={() => {
          ImagePicker.showImagePicker(options, (response) => {
            console.warn('Response = ', response);

            if (response.didCancel) {
              console.warn('User cancelled image picker');
            } else if (response.error) {
              console.warn('ImagePicker Error: ', response.error);
            } else {
              //const source = { uri: response.uri };

              // You can also display the image using data:
              //let source = {  response.data };//already added this thing

              this.setState({
                avatar: response.data //source,base64
              });
              //console.warn(this.state.avatar)
            }
          });


        }}></Button>


        <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.avatar }} style={{ height: 190, width: 190 }}></Image>

      </View>
    );
  }
}

export default Home;
