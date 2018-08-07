import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  StackNavigator,
  TouchableHighlight,
  ActivityIndicator,
  ListView,
  Text,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
//importing components from react-native library
export default class MyCards1 extends Component {
  //exporting so to use these components in other files
  constructor(props) {
    //for data that will change we use state in constructor
    super(props);
    this.state = {
      isLoading: true
    }; //Different input fields for the user
  }
  GetItem(card_name) {
    Alert.alert(card_name);
  }

  static navigationOptions = {
    title: 'Home DashBoard' //title of page
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      // style prop js object //Container that supports layout
      <View style={styles.MainContainer}>
        <View style={styleImage.container}>
          // onPress function navigates to "MyCards"
          <TouchableHighlight onPress={() => navigate('MyCards')}>
            <Image
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
                marginBottom: 8,
                marginRight: 3
              }}
              source={require('./images/plus.png')} //plus button for uploading newcards
              onPress={() => navigate('MyCards')} // onPress function navigates to "MyCards"
            />
          </TouchableHighlight>
        </View>
        <View style={{backgroundColor: '#FFFFFF'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              bottom: 0,
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <Image //these style sheets for displaying taskbar
              style={{width: 65, height: 65, margin: 2}}
              source={require('./images/bottomNav/resources.png')}
            />

            <TouchableHighlight onPress={() => navigate('NewCard')}>
              <Image
                style={{width: 65, height: 65, margin: 2}}
                source={require('./images/bottomNav/mycards.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight onPress={() =>navigate('Notifications')}>
          <Image style={{width: 65, height: 65, margin:2 }} source={require('./images/bottomNav/notification.png')}/>
          </TouchableHighlight>

            <TouchableHighlight onPress={() => navigate('Edit')}>
              <Image
                style={{width: 65, height: 65, margin: 2}}
                source={require('./images/bottomNav/settings.png')}
              />
            </TouchableHighlight>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Text
              style={{
                marginRight: 2,
                color: '#6786af',
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >
              RESOURCES//taskbar menu names
            </Text>
            // onPress function navigates to NewCard.
            <TouchableHighlight onPress={() => navigate('NewCard')}>
              <Text
                style={{
                  marginHorizontal: 2,
                  color: '#6786af',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                MYCARDS//taskbar menu names
              </Text>
            </TouchableHighlight>
			
			
			<TouchableHighlight onPress={() =>navigate('Notifications')}>
            <Text
              style={{
                marginHorizontal: 2,
                color: '#6786af',
                fontSize: 16,
                fontWeight: 'bold'
              }}
            >
              NOTIFICATION//taskbar menu names
            </Text>
			</TouchableHighlight>
            // onPress function navigates to edit the card user uploaded
            <TouchableHighlight onPress={() => navigate('Edit')}>
              <Text
                style={{
                  marginLeft: 2,
                  color: '#6786af',
                  fontSize: 16,
                  fontWeight: 'bold'
                }}
              >
                SETTINGS//taskbar menu names
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
// styling of the components
const styleImage = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#efefef'
  }
});

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#efefef'
  },

  textViewHeadingView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 10
  },
  textViewHeading: {
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6786af'
  }
});
