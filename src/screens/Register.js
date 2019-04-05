import React, { Component } from 'react';
import {StyleSheet, View, ScrollView, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, Label} from 'native-base';
//import {NavigationActions} from 'react-navigation';
import * as firebase from 'firebase';



export default class Register extends React.Component {

constructor (props){
  super(props);
  this.state = ({
    email : '',
    password : '',
    name: '',
    lastName: '',
    ConfirmPassword: '',
  });

}

signupUser = (email, password) => {
  try{
    
    if(this.state.password.length < 6){
      alert("Input Password atleast 6 characters")
      return;
    }else if (this.state.password !== this.state.ConfirmPassword){
      Alert.alert("Confirm password mismatch")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {Alert.alert("Success")})
    .then(() => this.props.navigation.navigate('Login'), 
            (error) => { Alert.alert(error.message); });
// firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch(error){
    console.log(error.toString())
  }
}



  render() {
    const { navigate } = this.props.navigation;
      return (
        
    // <ScrollView>
      <View style = {styles.container}>
      <View style = {styles.logoContainer}>
      <Text style = {{color: '#fff'}}>Register User</Text>
        
  <Form>

    <Item style={styles.inputBox}>
      <Input
         style = {{color: '#fff'}}
         value = {this.state.name}
         autoCorrect = {false}
         autoCapitalize="none"
         placeholder="First Name"
         placeholderTextColor='#fff'
         onChangeText = {(name)=> this.setState({name})}
          />
    </Item>

    <Item style={styles.inputBox}>
      <Input
         style = {{color: '#fff'}}
         value = {this.state.lastName}
         autoCorrect = {false}
         autoCapitalize="none"
         placeholder="Last Name"
         placeholderTextColor='#fff'
         onChangeText = {(lastName)=> this.setState({lastName})}
          />
    </Item>


    <Item style={styles.inputBox}>
        <Input
          style = {{color: '#fff'}}
          value = {this.state.email}
          autoCorrect = {false}
          autoCapitalize="none"
          placeholder="Email"
          placeholderTextColor='#fff'
          onChangeText = {(email)=> this.setState({email})}
          />
    </Item>

    <Item style={styles.inputBox}>
          <Input
            style = {{color: '#fff'}}
            value = {this.state.password}
            autoCorrect = {false}
            autoCapitalize="none"
            secureTextEntry = {true}
            placeholder="Password"
            placeholderTextColor='#fff'
            onChangeText = {(password) => this.setState({password})}
          />
    </Item>

    <Item style={styles.inputBox}>
          <Input
            style = {{color: '#fff'}}
            value = {this.state.ConfirmPassword}
            autoCorrect = {false}
            autoCapitalize="none"
            secureTextEntry = {true}
            placeholder="Confirm Password"
            placeholderTextColor='#fff'
            onChangeText = {(ConfirmPassword) => this.setState({ConfirmPassword})}
          />
    </Item>

  </Form>
        
        <Button style = {styles.button}
          rounded
          onPress={this.signupUser}>
          <Text style={styles.buttonText}>Submit</Text>
        </Button>
        
        <Button style = {styles.button}
          rounded
          onPress={() => navigate('Login')}>
          <Text style={styles.buttonText}>Back</Text>
        </Button>

        <Button style = {styles.button}
          rounded
          onPress={() => navigate('AddClassScreen')}>
          <Text style={styles.buttonText}>Back</Text>
        </Button>

        <Button style = {styles.button}
          rounded
          onPress={() => navigate('Channel')}>
          <Text style={styles.buttonText}>Back</Text>
        </Button>

        <Button style = {styles.button}
          rounded
          onPress={() => navigate('TestSection')}>
          <Text style={styles.buttonText}>Back</Text>
        </Button>
      </View>
      </View>
      //</ScrollView>
      );
  }
}
const styles = StyleSheet.create({
 
  container: {
        flex: 1,
        backgroundColor:'#35586C',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: 100,
     
    },
   logo: {
       width:280,
       height: 280,
    },
  
    logText: {
      color: 'rgba(255, 255, 255, 255)',
      marginBottom: 20,      
     // alignItems: 'center',
      justifyContent: 'center',
    },

    inputBox: {
      width: 300,
      height: 45,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      //fontSize: 15,
      marginVertical: 10,
    },
   
   button: {
    backgroundColor: '#73B1B7',
    width: 80,
    height: 30,
    marginVertical: 10,
    marginLeft: 100,
    textAlign: 'center',
    justifyContent: 'center'
   },

   SignButton:{
    width: 114,
    height: 40,
    marginVertical: 10,
    marginLeft: 100,
    color: "#fff", 
    fontSize: 15, 
    justifyContent: 'center'
   
   },
   buttonText: {
    justifyContent: 'center',
    textAlign: 'center',
    color: "#ffffff", 

   }
   

});
