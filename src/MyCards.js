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
export default class MyCards extends Component {
  //exporting so to use these components in other file
  constructor(props) {
    //for data that will change we use state in constructor
    super(props);
    this.state = {
      isLoading: true
    };
  }
  GetItem(card_name) {
    Alert.alert(card_name);
  }

  static navigationOptions = {
    title: 'My Cards' //title of page
  };
  //component lets coder to split UI into independent and reusable pieces
  componentDidMount() {
    return fetch(
      'https://walletcard-production-pr-247.herokuapp.com/api/v1/cards',
      {
        //here we just passing URL to get contents of users from the back end
        method: 'GET', //POST or GET method depending on the request
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson)
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <View style={styles.MainContainer}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={rowData => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#FFFFFF'
                  }}
                >
                  <TouchableOpacity
                    onPress={this.GetItem.bind(this, rowData.name)}
                  >
                    <View style={styles.textViewHeadingView}>
                      <Text style={styles.textViewHeading}>{rowData.name}</Text>
                    </View>
                    <View
                      style={{
                        marginTop: 5,
                        marginLeft: 20,
                        marginRight: 20,
                        marginBottom: 10,
                        justifyContent: 'center'
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: '#484848'
                        }}
                      >
                        <View style={{flex: 2.5, backgroundColor: '#484848'}}>
                          <View style={{backgroundColor: '#FFFFFF', margin: 1}}>
                            <Text
                              style={{
                                margin: 5,
                                fontWeight: 'bold',
                                fontSize: 18
                              }}
                            >
                              {'NUM = ' + rowData.id}
                            </Text>
                            <View
                              style={{backgroundColor: '#484848', height: 1}}
                            />
                            <Text
                              style={{
                                margin: 5,
                                fontWeight: 'bold',
                                fontSize: 18,
                                backgroundColor: '#FFF'
                              }}
                            >
                              {'EXPIRES = ' + rowData.expires_on}
                            </Text>
                          </View>
                        </View>
                        <View style={{flex: 0.5, backgroundColor: '#484848'}}>
                          <View
                            style={{
                              backgroundColor: '#FFFFFF',
                              margin: 1,
                              justifyContent: 'center',
                              alignItems: 'center'
                            }}
                          >
                            <View style={{backgroundColor: '#FFF'}}>
                              <Image
                                style={{width: 49, height: 65, margin: 2}}
                                source={require('./images/valid.png')}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={styleImage.container}>
              // onPress function navigates to NewCard for uploading.
              <TouchableHighlight onPress={() => navigate('NewCard')}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    marginBottom: 8,
                    marginRight: 3
                  }}
                  source={require('./images/plus.png')}
                  //pressing plus button navigates to NewCard
                  onPress={() => navigate('NewCard')}
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
                <Image
                  style={{width: 65, height: 65, margin: 2}}
                  source={require('./images/bottomNav/mycards.png')}
                />
                <Image
                  style={{width: 65, height: 65, margin: 2}}
                  source={require('./images/bottomNav/notification.png')}
                />
                <Image
                  style={{width: 65, height: 65, margin: 2}}
                  source={require('./images/bottomNav/settings.png')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bottom: 0,
                  marginLeft: 10,
                  marginRight: 10
                }}
              >
                <Text
                  style={{
                    width: 60,
                    color: '#6786af',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  RESOURCES//taskbar menu names
                </Text>
                <Text
                  style={{
                    width: 60,
                    color: '#6786af',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  MY CARDS//taskbar menu names
                </Text>
                <Text
                  style={{
                    width: 60,
                    color: '#6786af',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  NOTIFICATION//taskbar menu names
                </Text>
                <Text
                  style={{
                    width: 60,
                    color: '#6786af',
                    fontSize: 16,
                    fontWeight: 'bold'
                  }}
                >
                  SETTINGS//taskbar menu names
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
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
