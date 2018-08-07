import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  PixelRatio,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight //this component is used to highlight any button or any taskbar.
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
//importing components from react-native library
export default class AddImages extends Component {
  //exporting so to use these components in other files
  static navigationOptions = {
    title: 'ADD IMAGES' //the title of this page is assigned as "ADD IMAGES".
  };
  render() {
    const {navigate} = this.props.navigation; //this function helps to navigate another screen
    return (
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          // style prop js object //Container that supports layout
          <Text //supports nesting, styling, and touch handling
            style={{
              marginTop: 30,
              color: '#6786af',
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            SELECT IMAGE OPTION
          </Text>
          //this StyleSheet is for displaying "SELECT IMAGE OPTION"
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <View
              style={{
                backgroundColor: '#484848',
                width: 100,
                height: 100,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <View
                style={{
                  margin: 1,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  style={{
                    width: 69,
                    height: 75,
                    marginTop: 20,
                    marginRight: 20,
                    marginLeft: 20,
                    backgroundColor: '#FFF'
                  }}
                  source={require('./images/camera/front.png')} //this function is used for accessing front button image
                />
                <View
                  style={{
                    backgroundColor: '#484848',
                    bottom: 0,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      margin: 1,
                      textAlign: 'center',
                      width: 100,
                      backgroundColor: '#FFF',
                      color: '#6786af',
                      fontSize: 16,
                      fontWeight: 'bold'
                    }}
                  >
                    CARD FRONT
                  </Text>
                  //this StyleSheet for displaying "CARD FRONT"
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#484848',
                width: 100,
                height: 100,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <View
                style={{
                  margin: 1,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  style={{
                    width: 65,
                    height: 75,
                    marginTop: 20,
                    marginRight: 19,
                    marginLeft: 19,
                    backgroundColor: '#FFF'
                  }}
                  source={require('./images/camera/back.png')}
                />
                <View
                  style={{
                    backgroundColor: '#484848',
                    bottom: 0,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      margin: 1,
                      textAlign: 'center',
                      width: 100,
                      backgroundColor: '#FFF',
                      color: '#6786af',
                      fontSize: 16,
                      fontWeight: 'bold'
                    }}
                  >
                    CARD BACK
                  </Text>
                  //this StyleSheet is for displaying "CARD BACK"
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#484848',
                width: 100,
                height: 100,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              <View
                style={{
                  margin: 1,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  style={{
                    width: 65,
                    height: 75,
                    marginTop: 20,
                    marginRight: 20,
                    marginLeft: 20,
                    backgroundColor: '#FFF'
                  }}
                  source={require('./images/camera/certificate.png')}
                />
                <View
                  style={{
                    backgroundColor: '#484848',
                    bottom: 0,
                    marginTop: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Text
                    style={{
                      margin: 1,
                      textAlign: 'center',
                      width: 100,
                      backgroundColor: '#FFF',
                      color: '#6786af',
                      fontSize: 16,
                      fontWeight: 'bold'
                    }}
                  >
                    CERTIFICATE
                  </Text>
                  //this StyleSheet is for displaying "CERTIFICATE".
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{
              marginTop: 30,
              color: '#6786af',
              fontSize: 26,
              fontWeight: 'bold'
            }}
          >
            CHOOSE FROM
          </Text>
          //this StyleSheet is for displaying "CHOOSE FROM"
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <TouchableHighlight onPress={() => navigate('MyCamera')}>
              <View
                style={{
                  backgroundColor: '#484848',
                  width: 100,
                  height: 100,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                <View
                  style={{
                    margin: 1,
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={{
                      width: 69,
                      height: 75,
                      marginTop: 20,
                      marginRight: 20,
                      marginLeft: 20,
                      backgroundColor: '#FFF'
                    }}
                    source={require('./images/camera/camera.png')}
                  />
                  <View
                    style={{
                      backgroundColor: '#484848',
                      bottom: 0,
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        margin: 1,
                        textAlign: 'center',
                        width: 100,
                        backgroundColor: '#FFF',
                        color: '#6786af',
                        fontSize: 16,
                        fontWeight: 'bold'
                      }}
                    >
                      CAMERA
                    </Text>
                    //this StyleSheet is for displaying "CAMERA"
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('ImagePicker')}>
              //this function is used to navigate to next page "ImagePicker"
              <View
                style={{
                  backgroundColor: '#484848',
                  width: 100,
                  height: 100,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                <View
                  style={{
                    margin: 1,
                    backgroundColor: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={{
                      width: 65,
                      height: 75,
                      marginTop: 20,
                      marginRight: 19,
                      marginLeft: 19,
                      backgroundColor: '#FFF'
                    }}
                    source={require('./images/camera/gallery.png')}
                  />
                  <View
                    style={{
                      backgroundColor: '#484848',
                      bottom: 0,
                      marginTop: 10,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text
                      style={{
                        margin: 1,
                        textAlign: 'center',
                        width: 100,
                        backgroundColor: '#FFF',
                        color: '#6786af',
                        fontSize: 16,
                        fontWeight: 'bold'
                      }}
                    >
                      GALLERY
                    </Text>
                    //this StyleSheet is for displaying "GALLERY"
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              bottom: 0,
              marginTop: 35,
              marginLeft: 100,
              marginRight: 100
            }}
          >
            <Image
              style={{width: 30, height: 30, margin: 2}}
              source={require('./images/dots/dot.png')}
            />
            <Image
              style={{width: 30, height: 30, margin: 2}}
              source={require('./images/dots/dot_filled.png')}
            />
            <Image
              style={{width: 30, height: 30, margin: 2}}
              source={require('./images/dots/dot.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}
// styling of the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  maincontainer: {
    flex: 1,
    alignItems: 'center'
  },
  SubmitButtonStyle: {
    marginTop: 40,
    paddingTop: 15,
    width: 140,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#f47301',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#fff'
  },
  TextStyle: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  ImageContainer: {
    borderRadius: 10,
    width: 50,
    height: 50,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CDDC39'
  }
});
