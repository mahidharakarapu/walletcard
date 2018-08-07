import React from 'react';
import {Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation'; // Version can be specified in package.json
//importing components from react-native library
class ActionScreen extends React.Component {
  //this component is used to
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Action!</Text>
      </View>
    );
  }
}

class UnreadScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Unread!</Text>
      </View>
    );
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>History!</Text>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Action: {screen: ActionScreen},
    Unread: {screen: UnreadScreen},
    History: {screen: HistoryScreen}
  },
  {
    tabBarOptions: {
      style: {
        activeBackgroundColor: '#f47301'
      }
    }
  }
);
