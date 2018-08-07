import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  StackNavigator,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
  ScrollView
} from 'react-native';
//importing components from react-native library
export default class NewCard extends Component {
  //exporting so to use these components in other file
  static navigationOptions = {
    title: 'New Card' //this is the title of the page
  };
  //for data that will change we use state in constructor
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      issuedon: '',
      expireson: '',
      trainingprovid: ''
    }; //Different input fields for the user
  }
  //component lets coder to split UI into independent and reusable pieces
  componentDidMount() {
    this._loadInitialState().done();
  } //this function helps to load data from the remote endpoints and to initiate network request
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user'); //this function is used for storing details of user
    if (value !== null) {
      //once the user fills the details in signup page it will navigate to Login page
      this.props.navigation.navigate('AddImages');
    }
  };

  render() {
    const {navigate} = this.props.navigation; //this function helps to navigate another screen
    return (
      <ScrollView>
        //this function is a scrolling container that hosts multiple components
        <KeyboardAvoidingView>
          //this function helps to position keyboard so that it won't avoid the
          //view of screen.
          <View style={styles.container1}>
            // style prop js object //Container that supports layout
            <Text //supports nesting, styling, and touch handling
              style={{
                color: '#6786af',
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 5,
                marginBottom: 5
              }}
            >
              NAME:
            </Text>//this is the style sheet for "Name:"
            <View style={styles.tinput}>
              <TextInput
                style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                onChangeText={name => this.setState({name})}
              />
            </View>
            <Text style={{color: '#6786af', fontSize: 18, fontWeight: 'bold'}}>
              NUMBER:
            </Text>
            //style sheet for displaying "Number:"
            <View style={styles.tinput}>
              <TextInput
                style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                onChangeText={number => this.setState({number})}
              />
            </View>
            <Text style={{color: '#6786af', fontSize: 18, fontWeight: 'bold'}}>
              TRAINING PROVIDER id:
            </Text>
            //style sheet for displaying "TRAINING PROVIDER id:" .
            <View style={styles.tinput}>
              <TextInput
                style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                onChangeText={trainingprovid => this.setState({trainingprovid})}
              />
            </View>
            <View style={styles.container1}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginTop: 20,
                      color: '#6786af',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    ISSUED ON:
                  </Text>
                  //StyleSheet for displaying "ISSUED On:"
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text
                    style={{
                      marginTop: 20,
                      color: '#6786af',
                      fontSize: 18,
                      fontWeight: 'bold'
                    }}
                  >
                    EXPIRES ON:
                  </Text>
                  //style sheet for displaying "Expires on:"
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={styles.tinput1}>
                  <TextInput
                    style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                    onChangeText={issuedon => this.setState({issuedon})}
                  />
                </View>
                <View style={styles.tinput1}>
                  <TextInput
                    style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                    onChangeText={expireson => this.setState({expireson})}
                  />
                </View>
              </View>

              <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}
                  //as the submit button is used here as user clicks on this button it will automatically navigate to next page
                  onPress={() => navigate('AddImages')}
                >
                  <Text style={styles.TextStyle}> Add Images </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.container2}>
                <TouchableOpacity
                  style={styles.SubmitButtonStyle}
                  activeOpacity={0.5}
                  onPress={this.upload}
                >
                  <Text style={styles.TextStyle}> Upload </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.container1}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    bottom: 0,
                    marginTop: 30,
                    marginLeft: 100,
                    marginRight: 100
                  }}
                >
                  <Image
                    style={{width: 30, height: 30, margin: 2}}
                    source={require('./images/dots/dot_filled.png')}
                  />
                  <Image
                    style={{width: 30, height: 30, margin: 2}}
                    source={require('./images/dots/dot.png')}
                  />
                  <Image
                    style={{width: 30, height: 30, margin: 2}}
                    source={require('./images/dots/dot.png')}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  upload = () => {
    fetch('http://walletcard-production-pr-247.herokuapp.com/api/v1/cards', {
      //here we just passing URL to get contents of users from the back end
      method: 'POST', //POST or GET method depending on the request
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token token="aaef799115d59f940568132427dedf7a"'
      },
      body: JSON.stringify({
        //Binding the input from the user and sending it to the backend API
        name: this.state.name,
        number: this.state.number,
        trainingprovid: this.state.trainingprovid,
        issuedon: this.state.issuedon,
        expireson: this.state.expireson
      })
    })
      .then(response => response.json()) //Getting a response from the backend
      .then(res => {
        if (res.success === true) {
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('AddImages');
        } else {
          //for unsuccessful response
          alert(res.message);
        }
      });
  };
}
// styling of the components
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'column',

    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',

    marginLeft: 4,
    marginRight: 4
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tinput: {
    flexDirection: 'row',

    backgroundColor: '#FFFFFF',
    marginTop: 3,
    marginLeft: 4,
    marginRight: 4,
    borderColor: '#484848',
    borderWidth: 1
  },
  tinput1: {
    flex: 1,
    flexDirection: 'row',

    backgroundColor: '#FFFFFF',
    marginTop: 3,
    marginLeft: 4,
    marginRight: 4,
    borderColor: '#484848',
    borderWidth: 1
  },

  SubmitButtonStyle: {
    height: 55,
    width: 150,
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,

    backgroundColor: '#f47301',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center'
  },
  TextStyle: {
    height: 50,
    width: 120,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
