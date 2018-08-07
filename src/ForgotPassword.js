import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  StackNavigator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
//importing components from react native library
export default class ForgotPassword extends Component {
  //exporting so to use these components in other files
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    //fetch the data from An External API or perform some unique operations which need the JSX elements
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    //AsyncStorage is used for unencryped key value storage.
    var value = await AsyncStorage.getItem('user');
    //user details are stored in AsyncStorage such that it wont be encrypted easily.
    if (value !== null) {
      this.props.navigation.navigate('Login');
      //Navigate to login page
    }
  };

  render() {
    //rendering components on to the screen
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{width: 220, height: 50}}
          source={require('./images/logo_text.png')}
        />

        <Text
          style={{
            width: 300,
            marginTop: 45,
            color: '#f47301',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          EMAIL//Text heading
        </Text>

        <View style={styles.tinput}>
          <TextInput
            style={{
              width: 300,
              height: 50,
              margin: 1,
              backgroundColor: '#FFFFFF'
            }}
            onChangeText={email => this.setState({email})} //Callback that is called when the text input's text changes
          />
        </View>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={this.fpass}
        >
          //Making the button clickable
          <Text style={styles.TextStyle}> SUBMIT </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigate('Login')}
        >
          <Text style={styles.TextStyle}> LOGIN </Text>
        </TouchableOpacity>
      </View>
    );
  }

  fpass = () => {
    fetch(
      'https://walletcard-production-pr-247.herokuapp.com/api/v1/forgot_passwords',
      {
        //here we just passing URL to get contents of users from the back end
        method: 'POST', //POST or GET method depending on the request
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          //Binding the input from the user and sending it to the backend API
          email: this.state.email
        })
      }
    )
      .then(response => response.json()) //Getting a response from the backend
      .then(res => {
        if (res.success === true) {
          //for successful response
          AsyncStorage.setItem('user', res.user);
          this.props.navigation.navigate('Login');
        } else {
          //for unsuccessful response
          alert(res.message);
        }
      });
  };
}
// styling of the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  tinput: {
    backgroundColor: '#484848',
    marginTop: 3
  },

  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    width: 120,
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
  }
});
