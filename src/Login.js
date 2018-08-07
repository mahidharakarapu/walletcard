import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text, //helps for displaying components
  View, //fundamental component for building UI
  Image, //this is for displaying images
  TextInput,
  Button, //basic component for handling touches
  StackNavigator,
  TouchableOpacity, //making views respond properly for touches
  AsyncStorage, //it is simple,unencryped,asynchronous storage
  Alert //launches an alert dialog with specified title and message
} from 'react-native';
//importing components from react-native library
import ForgotPassword from './ForgotPassword';
//exporting so to use these components in other file
export default class Login extends Component {
  static navigationOptions = {
    //component used for navigating between screens.
    header: null
  };

  constructor(props) {
    //for data that will change we use state in constructor
    super(props);
    this.state = {
      email: '',
      password: '',
      app_version: '0.1'
    }; //Different input fields for the user
  }

  componentDidMount() {
    //component lets coder to split UI into independent and reusable pieces
    this._loadInitialState().done();
  } //this function helps to load data from the remote endpoints and to initiate network request
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user'); //this function is used for storing details of user
    if (value !== null) {
      this.props.navigation.navigate('MyCards'); //once the user fills the details in signup page it will navigate to MyCards page.
    }
  };

  render() {
    const {navigate} = this.props.navigation; //this function helps to navigate another screen
    return (
      <View style={styles.container}>
        // style prop js object //Container that supports layout
        <Image
          style={{width: 100, height: 100}}
          source={require('./images/logo.png')}
        />
        <Image
          style={{width: 200, height: 46, marginTop: 10}}
          source={require('./images/wallet_text.png')} //this is for displaying "WalletCard" name on the Login page
        />
        <Text //supports nesting, styling, and touch handling
          style={{
            width: 200,
            marginTop: 45,
            color: '#6786af',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          EMAIL//this is the StyleSheet for displaying "EMAIL"
        </Text>
        <View style={styles.tinput}>
          <TextInput
            style={{
              width: 200,
              height: 50,
              margin: 1,
              backgroundColor: '#FFFFFF'
            }}
            onChangeText={email => this.setState({email})}
          />
        </View>
        <Text
          style={{
            width: 200,
            marginTop: 5,
            color: '#6786af',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          PASSWORD//this StyleSheet is for displaying "PASSWORD"
        </Text>
        <View style={styles.tinput}>
          <TextInput
            style={{
              width: 200,
              height: 50,
              margin: 1,
              backgroundColor: '#FFFFFF'
            }}
            onChangeText={password => this.setState({password})}
            secureTextEntry //hiding the input from the user
          />
        </View>
        <Text
          style={{
            width: 200,
            marginTop: 5,
            marginBottom: 20,
            color: '#f47301',
            fontSize: 14,
            fontWeight: 'bold'
          }} // onPress function navigates to ForgotPassword page for user who forgot their password
          onPress={() => navigate('ForgotPassword')}
        >
          FORGOT PASSWORD ?//Text heading
        </Text>
        <TouchableOpacity
          style={styles.SubmitButtonStyle}
          activeOpacity={0.5}
          onPress={this.login}
        >
          <Text style={styles.TextStyle}> LOGIN </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
            width: 400
          }}
        >
          <Text style={{color: '#808080', fontSize: 16, fontWeight: 'bold'}}>
            NOT A USER?//text heading
          </Text>
          <Text
            style={{
              color: '#f47301',
              textDecorationLine: 'underline',
              fontSize: 16,
              marginLeft: 5,
              fontWeight: 'bold'
            }} // onPress function navigates to signup page for registering of new users
            onPress={() => navigate('Signup')}
          >
            SIGN UP NOW//Text heading
          </Text>
        </View>
      </View>
    );
  }
  login = () => {
    fetch(
      'https://walletcard-production-pr-247.herokuapp.com/api/v1/session/new',
      {
        //here we just passing URL to get contents of users from the back end
        method: 'POST', //POST or GET method depending on the request
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          //'Authorization':'Token token="aaef799115d59f940568132427dedf7a"',
        },
        body: JSON.stringify({
          //Binding the input from the user and sending it to the backend API
          email: this.state.email,
          password: this.state.password,
          app_version: this.state.app_version
        })
      }
    )
      .then(response => response.json())
      .then(res => {
        console.log(res);

        if (res.message !== 'Successfully authenticated.') {
          //for successful message
          Alert.alert(res.message);
        } else {
          AsyncStorage.setItem('user', res.user); //user details are stored in AsychStorage
          this.props.navigation.navigate('MyCards1');
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
