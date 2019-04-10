import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, } from 'react-native';
import {Card, CardItem, Button, Form, Item} from 'native-base';
import {AntDesign, Octicons} from '@expo/vector-icons';
import * as firebase from 'firebase';



export default class Channels extends React.Component {
    static navigationOptions = {
      header: null,
      tabBarVisible: false,
    };

  onSignoutPress = () => {
    firebase.auth().signOut();
  };
    render() {
      const {navigate} = this.props.navigation;
    
        return (
          <ScrollView style = {styles.scrollview}>
          <View style = {styles.container}>
            <View style = {styles.listStyle}>
              <Button transparent
                  style = {styles.boxShadow}
                  onPress ={() => navigate('Section')}> 
              <Octicons style = {{ marginLeft: 10 ,marginRight: -23}} name = 'primitive-dot' size = {13} color = 'green' /> 
                <Text style = {styles.boxText}> 
                 Sample Class 1 
                </Text>
                <AntDesign style= {{marginRight: 3}} name ='right' size = {12} color = '#fff' />
              </Button>
              <Button transparent style = {styles.boxShadow}>
              <Octicons style = {{ marginLeft: 10 ,marginRight: -23}} name = 'primitive-dot' size = {13} color = 'green' /> 
                <Text style = {styles.boxText}>Sample Class 2</Text>
                <AntDesign style= {{marginRight: 3}} name ='right' size = {12} color = '#fff' />
              </Button>
            < Button transparent style = {styles.boxShadow}>
            <Octicons style = {{ marginLeft: 10 ,marginRight: -23}} name = 'primitive-dot' size = {13} color = 'green' /> 
                <Text style = {styles.boxText}>Sample Class 3</Text>
                <AntDesign style= {{marginRight: 3}} name ='right' size = {12} color = '#fff' />
              </Button>
              < Button transparent style = {styles.boxShadow}>
            <Octicons style = {{ marginLeft: 10 ,marginRight: -23}} name = 'primitive-dot' size = {13} color = 'green' /> 
                <Text style = {styles.boxText}>Sample Class 3</Text>
                <AntDesign style= {{marginRight: 3}} name ='right' size = {12} color = '#fff' />
              </Button>
            </View>
          </View>
          </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'stretch',
},

scrollview:{
    backgroundColor:'#35586C',
    paddingLeft: 10,
    paddingRight: 'auto',
    paddingTop: 15,
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
    backgroundColor: 'rgba(255,255,255, 0.2)',
    shadowColor: "#fff",
    shadowOffset: {
	    width: 0,
	    height: 1,
    },
    shadowOpacity: 0.18,
    //shadowRadius: 1.00,
    //elevation: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    height: 43,
    marginTop: 5,
    marginRight: 7,
  },

  boxText:{
    color: '#fff', 
    fontSize: 12, 
    marginLeft: 5, 
    flex: 1,
    alignItems: 'center',
    paddingLeft: 25,
  }

});
