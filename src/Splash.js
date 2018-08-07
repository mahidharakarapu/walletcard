import React, {Component} from 'react';
//importing components from react-native library
import {Platform, StyleSheet, View, Image} from 'react-native';
//exporting so to use these components in other files
export default class Splash extends Component {
  //react native module allows to use UI for "splash" screen from the given components
  static navigationOptions = {
    //component used for navigating between screens
    header: null
  }; //component lets coder to split UI into independent and reusable pieces
  componentWillMount() {
    setTimeout(() => {
      //here we assigned a timeout for navigating to next screen
      this.props.navigation.navigate('Login');
    }, 2000); //upto 2000 milliseconds flash screen will be displayed
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 100, height: 100}}
          source={require('./images/logo.png')} //this is the StyleSheet for displaying logo
        />
      </View>
    );
  }
}
// styling of the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});
