import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import {Card, CardItem, Button, Form, Item} from 'native-base';
import * as firebase from 'firebase';


export default class TestSection extends React.Component {
    static navigationOptions = {
      header: null
  }

  onSignoutPress = () => {
    firebase.auth().signOut();
  }
    render() {
      const {navigate} = this.props.navigation;
        return (
          <ScrollView style = {styles.container}>
           <View style = {styles.connected}>
                <Text style = {{color: '#fff'}}>Connected</Text>
           </View>
           <View style = {styles.offline}>
                <Text style = {{color: '#fff'}}>Offline</Text>
           </View>
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor:'#35586C',
    paddingLeft: 10,
    paddingRight: 'auto',
    paddingTop: 35,
},
  text : {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  connected: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',

  },
  offline: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
  },
});
