import React, {Component} from 'react';
import {StyleSheet, Text, Dimensions, StackNavigator, View} from 'react-native';
//importing components from react-native library
import Camera from 'react-native-camera';
//exporting so to use these components in other file
export default class MyCamera extends Component {
  render() {
    //rendering components on to the screen
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        // style prop js object //Container that supports layout
        <Camera
          ref={cam => {
            this.camera = cam;
          }}
          style={styles.preview} //style apllication
          aspect={Camera.constants.Aspect.fill} //this controls size of undefined dimensions of node
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
            [CAPTURE]//button for capturing image
          </Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    this.camera
      .capture()
      .then(data => console.log(data))
      .catch(err => console.error(err)); //preview functions for captured pictures
    this.props.navigation.navigate('ImagePicker'); //navigate to MyCards1
  }
}
// styling of the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
