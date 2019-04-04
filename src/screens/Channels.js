import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ScrollView } from 'react-native';
import {Card, CardItem, Button, Form, Item} from 'native-base';
import * as firebase from 'firebase';


export default class Channels extends React.Component {
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
            {/* <Text>Channel</Text>
            <Button title= "Logout"
            onPress ={() => firebase.auth().signOut()
              .then (() => this.props.navigation.navigate('Login'))}
              transparent
              style = {{color: '#fff'}}>
              <Text style={styles.label}>Logout</Text>
            </Button> */}
            {/* <Form>

              <Item style = {styles.cardStyle}>
                <Button 
                  onPress ={() => navigate('AddClassScreen')}
                  transparent
                  primary>
                  <Text style = {{color:'#fff'}}>Add Class</Text>
                </Button>
              </Item>

            <Card style = {styles.cardStyle}>
              <CardItem>
                <Button 
                  onPress ={() => navigate('JoinScreen')}
                  transparent
                  primary>
                  <Text style = {{color:'#fff'}}>Sample clasee click to join</Text>
                </Button>
              </CardItem>
            </Card>
                          
            </Form> */}
            <View style = {styles.listStyle}>

            
              <Text style = {{color: '#fff', fontSize: 18,}}>Class List</Text>

            <Button transparent>
              <Text style = {{color: '#fff', fontSize: 12, marginLeft: 5}}>Sample Class 1</Text>
            </Button>
            <Button transparent>
              <Text style = {{color: '#fff', fontSize: 12, marginLeft: 5}}>Sample Class 1</Text>
              </Button>
            <Button transparent>
              <Text style = {{color: '#fff', fontSize: 12, marginLeft: 5}}>Sample Class 1</Text>
              </Button>
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
  cardStyle: {
    backgroundColor:'#73B1B7',
  },

  listStyle:{
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
    backgroundColor: 'rgba(45, 45, 42, 0.8)',
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    alignItems: 'stretch',
    height: 450,
  }
});
