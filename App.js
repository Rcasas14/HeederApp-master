import React, { Component } from 'react';
import {createStackNavigator, createAppContainer } from 'react-navigation';
import  {StyleSheet, Text, View} from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import HomeScreen from './src/screens/HomeScreen';
import ApiKeys from './ApiKey/ApiKey';
import * as firebase from 'firebase';
import Channels from './src/screens/Channels';
import AddClassScreen from './src/CrudScreens/AddClassScreen';
import JoinScreen from './src/CrudScreens/JoinNewChannel/JoinScreen';
import TestChannel from './src/CrudScreens/TestChannel';
import Section from './src/screens/ClassScreen/Section';
import Profile from './src/screens/Profile';


const Application = createStackNavigator({

// -----------Temporary-----------------


Login: {
  screen: Login,
  navigationOptions: {
    title: 'Login',
    header: null,
    tabBarVisible: false,
  }
},  
Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Login',
      header: null,
      tabBarVisible: false,
    }
  },
// -------------------------

Section: {
  screen: Section,
  navigationOptions: {
    title: 'TestSection',
    header: null,
    tabBarVisible: false,
  }
},    

    Channel: {
      screen: Channels,
      navigationOptions: {
        title: 'Channels',
        header: null,
        tabBarVisible: false,
        headerStyle: {
          backgroundColor: '#35586C',
        }
      }
    },
    TestChannel: {
      screen: TestChannel,
      navigationOptions: {
        title: 'TestChannel',
        header: null,
        tabBarVisible: false,
      }
    },

    AddClassScreen: {
      screen: AddClassScreen,
      navigationOptions: {
        title: 'AddClassScreen',
        header: null,
        tabBarVisible: false,
      }
    },

    JoinScreen: {
      screen: JoinScreen,
      navigationOptions: {
        title: 'JoinScreen',
        header: null,
        tabBarVisible: false,
      }
    },

    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Register',
        header: null,
        tabBarVisible: false,
      }
    },
    
  
 
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        header: null,
        tabBarVisible: false,
      }
    },
    
    
});

const AppContainer = createAppContainer(Application);

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      isAuthenticationReady: false,
      isAuthenticated: false,
    };

    // Initialize firebase...
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }

  render() {
    if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
      return (
        // AppLoading
        <AppContainer 
        startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        // <AppContainer>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          {(this.state.isAuthenticated) ? <Channel /> : <Login />}
        </View>
        
      );
    }
    }
    _handleFinishLoading = () => {
      this.setState({ isLoadingComplete: true });
    };
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    statusBarUnderlay: {
      height: 24,
      backgroundColor: 'rgba(0,0,0,0.2)',
    },
  });

