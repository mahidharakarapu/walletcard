import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from './src/Splash'
import Login from './src/Login'
import MyCards from './src/MyCards'
import Signup from './src/Signup'
import ForgotPassword from './src/ForgotPassword'
import NewCard from './src/NewCard'
import Step1 from './src/Step1'
import AddImages from './src/AddImages'
import Resources from './src/Resources'
import Notifications from './src/Notifications'
import Settings from './src/Settings'
import MyCamera from './src/MyCamera'
import Edit from './src/Edit'
import MyCards1 from './src/MyCards1'

const Navigation = StackNavigator({
  Home:{
    screen:Splash,
  },
  Notifications:{
    screen:Notifications,
  },
  Login:{
    screen:Login,
  },
  MyCards:{
    screen:MyCards,
  },
  MyCards1:{
    screen:MyCards1,
  },
  Signup:{
    screen:Signup,
  },
  Edit:{
    screen:Edit,
  },
  ForgotPassword:{
    screen:ForgotPassword,
  },
  NewCard:{
    screen:NewCard,
  },
  Step1:{
    screen:Step1,
  },
  AddImages:{
    screen:AddImages,
  },
  MyCamera:{
    screen:MyCamera,
  }
})
export default Navigation;
