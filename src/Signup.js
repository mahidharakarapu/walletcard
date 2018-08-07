import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button, //component for handling touches that should render nicely
  StackNavigator,
  Alert,
  TouchableOpacity, //making views respond properly to touches
  AsyncStorage,
  Picker,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
//importing components from react-native library
export default class Signup extends Component {
  //exporting so to use these components in other files
  static navigationOptions = {
    header: null
  }; //component used for navigating between screens
  constructor(props) {
    //for data that will change we use state in constructor
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      zip: '',
      pickerSelection: '',
      userSubscription: true,
      newsLetter: false
    }; //Different input fields for the user
  }
  //component lets coder to split UI into independent and reusable pieces
  componentDidMount() {
    //this function helps to load data from the remote endpoints and to initiate network request
    this._loadInitialState().done();
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user'); //this function is used for storing details of user
    if (value !== null) {
      this.props.navigation.navigate('Login'); //once the user fills the details in signup page it will navigate to Login page
    }
  };

  render() {
    const {navigate} = this.props.navigation; //this function helps to navigate another screen
    return (
      <ScrollView>
        //this function is a scrolling container that hosts multiple components
        <KeyboardAvoidingView behavior="position">
          //this function helps to position keyboard so that it won't avoid the
          //view of screen.
          <View style={styles.container1}>
            // style prop js object //Container that supports layout
            <Image
              style={{width: 220, height: 40, marginTop: 10, marginBottom: 10}}
              source={require('./images/logo_text.png')}
            />
          </View>
          <View style={styles.container}>
            <Text //supports nesting, styling, and touch handling
              style={{
                flex: 1,
                marginTop: 25,
                color: '#f47301',
                fontSize: 14,
                fontWeight: 'bold'
              }}
            >
              FIRST NAME
            </Text>
            //style sheet for displaying "FIRST NAME"
            <View style={styles.tinput}>
              <TextInput
                style={{
                  flex: 1,
                  fontSize: 14,
                  margin: 1,
                  backgroundColor: '#FFFFFF'
                }}
                onChangeText={firstName => this.setState({firstName})}
              />
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                LAST NAME
              </Text>
              //style sheet for displaying "lastName"
              <View style={styles.tinput}>
                <TextInput
                  style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                  onChangeText={lastName => this.setState({lastName})}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                EMAIL
              </Text>
              //StyleSheet for displaying "EMAIL"
              <View style={styles.tinput}>
                <TextInput
                  style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                  onChangeText={email => this.setState({email})}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                PASSWORD
              </Text>
              //style sheet for displaying "PASSWORD"
              <View style={styles.tinput}>
                <TextInput
                  style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                  onChangeText={password => this.setState({password})}
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                CONFIRM PASSWORD//text heading
              </Text>
              <View style={styles.tinput}>
                <TextInput
                  style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                  onChangeText={confirmPassword =>
                    this.setState({confirmPassword})
                  }
                  secureTextEntry
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                ZIP//text heading
              </Text>
              <View style={styles.tinput}>
                <TextInput
                  style={{flex: 1, margin: 1, backgroundColor: '#FFFFFF'}}
                  onChangeText={zip => this.setState({zip})}
                />
              </View>
            </View>
            <View style={styles.container}>
              <Text
                style={{
                  flex: 1,
                  marginTop: 5,
                  color: '#f47301',
                  fontSize: 14,
                  fontWeight: 'bold'
                }}
              >
                COUNTRY//text heading
              </Text>

              <View style={styles.ttinput}>
                <Picker
                  style={{flex: 1, borderColor: '#f47301'}}
                  selectedValue={this.state.pickerSelection}
                  onValueChange={
                    (itemValue, itemIndex) =>
                      this.setState({pickerSelection: itemValue}) //pickerSelection for country list
                  }
                >
                  <Picker.Item label="Canada" value="CA" />
                  <Picker.Item label="United States" value="US" />
                  <Picker.Item label="Afghanistan" value="AF" />
                  <Picker.Item label="Åland Islands" value="AX" />
                  <Picker.Item label="Albania" value="AL" />
                  <Picker.Item label="Algeria" value="DZ" />
                  <Picker.Item label="American Samoa" value="AS" />
                  <Picker.Item label="Andorra" value="AD" />
                  <Picker.Item label="Angola" value="AO" />
                  <Picker.Item label="Anguilla" value="AI" />
                  <Picker.Item label="Antarctica" value="AQ" />
                  <Picker.Item label="Antigua and Barbuda" value="AG" />
                  <Picker.Item label="Argentina" value="AR" />
                  <Picker.Item label="Armenia" value="AM" />
                  <Picker.Item label="Aruba" value="AW" />
                  <Picker.Item label="Australia" value="AU" />
                  <Picker.Item label="Austria" value="AT" />
                  <Picker.Item label="Azerbaijan" value="AZ" />
                  <Picker.Item label="Bahamas" value="BS" />
                  <Picker.Item label="Bahrain" value="BH" />
                  <Picker.Item label="Bangladesh" value="BD" />
                  <Picker.Item label="Barbados" value="BB" />
                  <Picker.Item label="Belarus" value="BY" />
                  <Picker.Item label="Belgium" value="BE" />
                  <Picker.Item label="Belize" value="BZ" />
                  <Picker.Item label="Benin" value="BJ" />
                  <Picker.Item label="Bermuda" value="BM" />
                  <Picker.Item label="Bhutan" value="BT" />
                  <Picker.Item label="Bolivia" value="BO" />
                  <Picker.Item
                    label="Bonaire, Sint Eustatius and Saba"
                    value="BQ"
                  />
                  <Picker.Item label="Bosnia and Herzegovina" value="BA" />
                  <Picker.Item label="Botswana" value="BW" />
                  <Picker.Item label="Bouvet Island" value="BV" />
                  <Picker.Item label="Brazil" value="BR" />
                  <Picker.Item
                    label="British Indian Ocean Territory"
                    value="IO"
                  />
                  <Picker.Item label="Brunei Darussalam" value="BN" />
                  <Picker.Item label="Bulgaria" value="BG" />
                  <Picker.Item label="Burkina Faso" value="BF" />
                  <Picker.Item label="Burundi" value="BI" />
                  <Picker.Item label="Cambodia" value="KH" />
                  <Picker.Item label="Cameroon" value="CM" />
                  <Picker.Item label="Canada" value="CA" />
                  <Picker.Item label="Cape Verde" value="CV" />
                  <Picker.Item label="Cayman Islands" value="KY" />
                  <Picker.Item label="Central African Republic" value="CF" />
                  <Picker.Item label="Chad" value="TD" />
                  <Picker.Item label="Chile" value="CL" />
                  <Picker.Item label="China" value="CN" />
                  <Picker.Item label="Christmas Island" value="CX" />
                  <Picker.Item label="Cocos (Keeling) Islands" value="CC" />
                  <Picker.Item label="Colombia" value="CO" />
                  <Picker.Item label="Comoros" value="KM" />
                  <Picker.Item
                    label="Congo, Republic of the (Brazzaville)"
                    value="CG"
                  />
                  <Picker.Item
                    label="Congo, the Democratic Republic of the (Kinshasa)"
                    value="CD"
                  />
                  <Picker.Item label="Cook Islands" value="CK" />
                  <Picker.Item label="Costa Rica" value="CR" />
                  <Picker.Item label="Côte d'Ivoire, Republic of" value="CI" />
                  <Picker.Item label="Croatia" value="HR" />
                  <Picker.Item label="Cuba" value="CU" />
                  <Picker.Item label="Cyprus" value="CY" />
                  <Picker.Item label="Czech Republic" value="CZ" />
                  <Picker.Item label="Denmark" value="DK" />
                  <Picker.Item label="Djibouti" value="DJ" />
                  <Picker.Item label="Dominica" value="DM" />
                  <Picker.Item label="Dominican Republic" value="DO" />
                  <Picker.Item label="Ecuador" value="EC" />
                  <Picker.Item label="Egypt" value="EG" />
                  <Picker.Item label="El Salvador" value="SV" />
                  <Picker.Item label="Equatorial Guinea" value="GQ" />
                  <Picker.Item label="Eritrea" value="ER" />
                  <Picker.Item label="EstoEthiopiania" value="EE" />
                  <Picker.Item label="Ethiopia" value="ET" />
                  <Picker.Item
                    label="Falkland Islands (Islas Malvinas)"
                    value="FK"
                  />
                  <Picker.Item label="Faroe Islands" value="FO" />
                  <Picker.Item label="Fiji" value="FJ" />
                  <Picker.Item label="Finland" value="FI" />
                  <Picker.Item label="France" value="FR" />
                  <Picker.Item label="French Guiana" value="GF" />
                  <Picker.Item label="French Polynesia" value="PF" />
                  <Picker.Item
                    label="French Southern and Antarctic Lands"
                    value="TF"
                  />
                  <Picker.Item label="Gabon" value="GA" />
                  <Picker.Item label="Gambia, The" value="GM" />
                  <Picker.Item label="Georgia" value="GE" />
                  <Picker.Item label="Germany" value="DE" />
                  <Picker.Item label="Ghana" value="GH" />
                  <Picker.Item label="Gibraltar" value="GI" />
                  <Picker.Item label="Greece" value="GR" />
                  <Picker.Item label="Greenland" value="GR" />
                  <Picker.Item label="Grenada" value="GD" />
                  <Picker.Item label="Guadeloupe" value="GP" />
                  <Picker.Item label="Guam" value="GU" />
                  <Picker.Item label="Guatemala" value="GT" />
                  <Picker.Item label="Guernsey" value="GG" />
                  <Picker.Item label="Guinea" value="GN" />
                  <Picker.Item label="Guinea-Bissau" value="GW" />
                  <Picker.Item label="Guyana" value="GY" />
                  <Picker.Item label="Haiti" value="HT" />
                  <Picker.Item
                    label="Heard Island and McDonald Islands"
                    value="HM"
                  />
                  <Picker.Item label="Holy See (Vatican City)" value="VA" />
                  <Picker.Item label="Honduras" value="HN" />
                  <Picker.Item label="Hong Kong" value="HK" />
                  <Picker.Item label="Hungary" value="HU" />
                  <Picker.Item label="Iceland" value="IS" />
                  <Picker.Item label="India" value="IN" />
                  <Picker.Item label="Indonesia" value="ID" />
                  <Picker.Item label="Iran, Islamic Republic of" value="IR" />
                  <Picker.Item label="Iraq" value="IQ" />
                  <Picker.Item label="Ireland" value="IE" />
                  <Picker.Item label="Isle of Man" value="IM" />
                  <Picker.Item label="Israel" value="IL" />
                  <Picker.Item label="Italy" value="IT" />
                  <Picker.Item label="Jamaica" value="JM" />
                  <Picker.Item label="Japan" value="JP" />
                  <Picker.Item label="Jersey" value="JE" />
                  <Picker.Item label="Jordan" value="JO" />
                  <Picker.Item label="Kazakhstan" value="KZ" />
                  <Picker.Item label="Kenya" value="KE" />
                  <Picker.Item label="Kiribati" value="KI" />
                  <Picker.Item
                    label="Korea, Democratic People's Republic of"
                    value="KP"
                  />
                  <Picker.Item label="Korea, Republic of" value="KR" />
                  <Picker.Item label="Kuwait" value="KW" />
                  <Picker.Item label="Kyrgyzstan" value="KG" />
                  <Picker.Item label="Laos" value="LA" />
                  <Picker.Item label="Latvia" value="LV" />
                  <Picker.Item label="Lebanon" value="LB" />
                  <Picker.Item label="Lesotho" value="LS" />
                  <Picker.Item label="Liberia" value="LR" />
                  <Picker.Item label="Libya" value="LY" />
                  <Picker.Item label="Liechtenstein" value="LI" />
                  <Picker.Item label="Lithuania" value="LT" />
                  <Picker.Item label="Luxembourg" value="LU" />
                  <Picker.Item label="Macao" value="MO" />
                  <Picker.Item label="Macedonia, Republic of" value="MK" />
                  <Picker.Item label="Madagascar" value="MG" />
                  <Picker.Item label="Malawi" value="MW" />
                  <Picker.Item label="Malaysia" value="MY" />
                  <Picker.Item label="Maldives" value="MV" />
                  <Picker.Item label="Mali" value="ML" />
                  <Picker.Item label="Malta" value="MT" />
                  <Picker.Item label="Marshall Islands" value="MH" />
                  <Picker.Item label="Martinique" value="MQ" />
                  <Picker.Item label="Mauritania" value="MR" />
                  <Picker.Item label="Mauritius" value="MU" />
                  <Picker.Item label="Mayotte" value="YT" />
                  <Picker.Item label="Mexico" value="MX" />
                  <Picker.Item
                    label="Micronesia, Federated States of"
                    value="FM"
                  />
                  <Picker.Item label="Moldova" value="MD" />
                  <Picker.Item label="Monaco" value="MC" />
                  <Picker.Item label="Mongolia" value="MN" />
                  <Picker.Item label="Montenegro" value="ME" />
                  <Picker.Item label="Montserrat" value="MS" />
                  <Picker.Item label="Morocco" value="MA" />
                  <Picker.Item label="Mozambique" value="MZ" />
                  <Picker.Item label="Myanmar" value="MM" />
                  <Picker.Item label="Namibia" value="NA" />
                  <Picker.Item label="Nauru" value="NR" />
                  <Picker.Item label="Nepal" value="NP" />
                  <Picker.Item label="Netherlands" value="NL" />
                  <Picker.Item label="New Caledonia" value="NC" />
                  <Picker.Item label="New Zealand" value="NZ" />
                  <Picker.Item label="Nicaragua" value="NI" />
                  <Picker.Item label="Niger" value="NE" />
                  <Picker.Item label="Nigeria" value="NG" />
                  <Picker.Item label="Niue" value="NU" />
                  <Picker.Item label="Norfolk Island" value="NF" />
                  <Picker.Item label="Northern Mariana Islands" value="MP" />
                  <Picker.Item label="Norway" value="NO" />
                  <Picker.Item label="Oman" value="OM" />
                  <Picker.Item label="Pakistan" value="PK" />
                  <Picker.Item label="Palau" value="PW" />
                  <Picker.Item label="Palestine, State of" value="PS" />
                  <Picker.Item label="Panama" value="PA" />
                  <Picker.Item label="Papua New Guinea" value="PG" />
                  <Picker.Item label="Paraguay" value="PY" />
                  <Picker.Item label="Peru" value="PE" />
                  <Picker.Item label="Philippines" value="PH" />
                  <Picker.Item label="Pitcairn" value="PN" />
                  <Picker.Item label="Poland" value="PL" />
                  <Picker.Item label="Portugal" value="PT" />
                  <Picker.Item label="Puerto Rico" value="PR" />
                  <Picker.Item label="Qatar" value="QA" />
                  <Picker.Item label="Réunion" value="RE" />
                  <Picker.Item label="Romania" value="RO" />
                  <Picker.Item label="Russian Federation" value="RU" />
                  <Picker.Item label="Rwanda" value="RW" />
                  <Picker.Item label="Saint Barthélemy" value="BL" />
                  <Picker.Item
                    label="Saint Helena, Ascension and Tristan da Cunha"
                    value="SH"
                  />
                  <Picker.Item label="Saint Kitts and Nevis" value="KN" />
                  <Picker.Item label="Saint Lucia" value="LC" />
                  <Picker.Item label="Saint Martin" value="MF" />
                  <Picker.Item label="Saint Pierre and Miquelon" value="PM" />
                  <Picker.Item
                    label="Saint Vincent and the Grenadines"
                    value="VC"
                  />
                  <Picker.Item label="Samoa" value="WS" />
                  <Picker.Item label="San Marino" value="SM" />
                  <Picker.Item label="Sao Tome and Principe" value="ST" />
                  <Picker.Item label="Saudi Arabia" value="SA" />
                  <Picker.Item label="Senegal" value="SN" />
                  <Picker.Item label="Serbia" value="RS" />
                  <Picker.Item label="Seychelles" value="SC" />
                  <Picker.Item label="Sierra Leone" value="SL" />
                  <Picker.Item label="Singapore" value="SG" />
                  <Picker.Item label="int Maarten (Dutch part)" value="SX" />
                  <Picker.Item label="Slovakia" value="SK" />
                  <Picker.Item label="Slovenia" value="SI" />
                  <Picker.Item label="Solomon Islands" value="SB" />
                  <Picker.Item label="Somalia" value="SO" />
                  <Picker.Item label="South Africa" value="ZA" />
                  <Picker.Item
                    label="South Georgia and South Sandwich Islands"
                    value="GS"
                  />
                  <Picker.Item label="South Sudan" value="SS" />
                  <Picker.Item label="Spain" value="ES" />
                  <Picker.Item label="Sri Lanka" value="LK" />
                  <Picker.Item label="Sudan" value="SD" />
                  <Picker.Item label="Suriname" value="SR" />
                  <Picker.Item label="Swaziland" value="SZ" />
                  <Picker.Item label="Sweden" value="SE" />
                  <Picker.Item label="Switzerland" value="CH" />
                  <Picker.Item label="Syrian Arab Republic" value="SY" />
                  <Picker.Item label="Taiwan" value="TW" />
                  <Picker.Item label="Tajikistan" value="TJ" />
                  <Picker.Item
                    label="Tanzania, United Republic of"
                    value="TZ"
                  />
                  <Picker.Item label="Thailand" value="TH" />
                  <Picker.Item label="Timor-Leste" value="TL" />
                  <Picker.Item label="Togo" value="TG" />
                  <Picker.Item label="Tokelau" value="TK" />
                  <Picker.Item label="Tonga" value="TO" />
                  <Picker.Item label="Trinidad and Tobago" value="TT" />
                  <Picker.Item label="Tunisia" value="TN" />
                  <Picker.Item label="Turkey" value="TR" />
                  <Picker.Item label="Turkmenistan" value="TM" />
                  <Picker.Item label="Turks and Caicos Islands" value="TC" />
                  <Picker.Item label="Tuvalu" value="TV" />
                  <Picker.Item label="Uganda" value="UG" />
                  <Picker.Item label="Ukraine" value="UA" />
                  <Picker.Item label="United Arab Emirates" value="AE" />
                  <Picker.Item label="United Kingdom" value="GB" />
                  <Picker.Item
                    label="United Kingdom Overseas Territories"
                    value="UO"
                  />
                  <Picker.Item label="United States" value="US" />
                  <Picker.Item
                    label="United States Minor Outlying Islands"
                    value="UM"
                  />
                  <Picker.Item label="Uruguay" value="UY" />
                  <Picker.Item label="Uzbekistan" value="UZ" />
                  <Picker.Item label="Vanuatu" value="VU" />
                  <Picker.Item
                    label="Venezuela, Bolivarian Republic of"
                    value="VE"
                  />
                  <Picker.Item label="Viet Nam" value="VN" />
                  <Picker.Item label="Virgin Islands, British" value="VG" />
                  <Picker.Item label="Virgin Islands, U.S." value="VI" />
                  <Picker.Item label="Wallis and Futuna" value="WF" />
                  <Picker.Item label="Western Sahara" value="EH" />
                  <Picker.Item label="Yemen" value="YE" />
                  <Picker.Item label="Zambia" value="ZM" />
                  <Picker.Item label="Zimbabwe" value="ZW" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={styles.container1}>
            <View style={styles.sbutton}>
              <TouchableOpacity activeOpacity={0.5}>
                //Making the button clickable
                <Button
                  title="SIGNUP" //title of button
                  color="#f47301"
                  onPress={this.signup} //onPress feature enabled on submit button
                />
              </TouchableOpacity>
            </View>
            <View style={styles.sbutton}>
              <Button
                title="LOGIN" //title
                color="#f47301"
                onPress={() => navigate('Login')} //after pressing the button it will navigate to Login
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  signup = () => {
    //creating a function for submit button
    fetch(
      'https://walletcard-production-pr-247.herokuapp.com/api/v1/cardholders',
      {
        //here we just passing URL to get contents of users from the back end
        method: 'POST', //POST or GET method depending on the request
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          //'Authorization':'Token token="aaef799115d59f940568132427dedf7a"',
        },
        body: JSON.stringify({
          ////Binding the input from the user and sending it to the backend AP
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          zip: this.state.zip,
          userSubscription: this.state.userSubscription,
          newsLetter: this.state.newsLetter
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
  container1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginBottom: 3
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    marginTop: 2,
    marginLeft: 4,
    marginRight: 4
  },

  tinput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#484848',
    marginTop: 3
  },
  sbutton: {
    marginTop: 30,
    width: 120
  },
  ttinput: {
    width: 360,
    height: 50,
    backgroundColor: '#FFFFFF'
  }
});
