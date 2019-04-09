import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, } from 'react-native';
import {Card, CardItem, Button, Form, Item} from 'native-base';
import * as firebase from 'firebase';



export default class Channels extends React.Component {
    static navigationOptions = {
      header: null
    };

  onSignoutPress = () => {
    firebase.auth().signOut();
  };
    render() {
      const {navigate} = this.props.navigation;
    
        return (
          <View style = {styles.container}>
            {/* <Text>Channel</Text>
            <Button title= "Logout"
            onPress ={() => firebase.auth().signOut()
              .then (() => this.props.navigation.navigate('Login'))}
              transparent
              style = {{color: '#fff'}}>
              <Text style={styles.label}>Logout</Text>
            </Button> */}
            

          
            <View style = {styles.listStyle}>
              {/* <Text style = {[{color: '#fff', fontSize: 18,}, styles.boxShadow]}>Class List</Text> */}

              <Button transparent
                  style = {styles.boxShadow}
                  onPress ={() => navigate('TestScreen')}>
                <Text style = {styles.boxText}>Sample Class 1</Text>
              </Button>
              <Button transparent style = {styles.boxShadow}>
                <Text style = {styles.boxText}>Sample Class 1</Text>
              </Button>
            < Button transparent style = {styles.boxShadow}>
                <Text style = {styles.boxText}>Sample Class 1</Text>
              </Button>
            </View>
          </View>
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
    alignItems: 'stretch',
},
  text : {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  },
  cardStyle: {
    backgroundColor:'#73B1B7',
  },

  listStyle:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    //justifyContent: 'center',
  },
  boxShadow: {
    backgroundColor: '#fff',
    shadowColor: "#fff",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    margin: 20,
  },

  boxText:{
    color: '#000', 
    fontSize: 12, 
    marginLeft: 5, 
    flex: 1,
    alignItems: 'center',
  }

});
