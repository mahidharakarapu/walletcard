import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//importing components from react native library
import CameraRollPicker from 'react-native-camera-roll-picker';
//exporting so to use these components in other files
export default class ImagePicker extends Component {
  //component used for navigating between screens
  constructor(props) {
    //for data that will change we use state in constructor
    super(props);
    //input fields for the user
    this.state = {
      num: 0,
      selected: []
    };
  }

  getSelectedImages(images, current) {
    var num = images.length;

    this.setState({
      num: num,
      selected: images
    });

    console.log(current);
    console.log(this.state.selected);
  }

  render() {
    return (
      // style prop js object //Container that supports layout
      <View style={styles.container}>
        <View style={styles.content}>
          //supports nesting, styling, and touch handling
          <Text style={styles.text}>
            <Text style={styles.bold}> {this.state.num} </Text> images has been
            selected
          </Text>
        </View>
        //component which provides image selection from camera roll
        <CameraRollPicker //provides acess to phone camera or photo library
          scrollRenderAheadDistance={500} //rendering rows before appear on screen
          initialListSize={1} //size of rows when appear
          pageSize={3} //no. of rows to render per loop
          removeClippedSubviews={false} //improving scrool performance
          groupTypes="SavedPhotos" //group photos filtering
          batchSize={5}
          maximum={3}
          selected={this.state.selected}
          assetType="Photos" //specifies filter like videos or photos
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages.bind(this)} //it provides function call to javascript.
        />
      </View>
    );
  }
}
// styling of the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6AE2D'
  },
  content: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 16,
    alignItems: 'center',
    color: '#fff'
  },
  bold: {
    fontWeight: 'bold'
  },
  info: {
    fontSize: 12
  }
});
