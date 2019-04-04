//input channel unique ID, the user must have unique ID 
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, InputGroup} from 'native-base';
//import TestChannel from '../TestChannel';
import * as firebase from 'firebase';



export default class JoinScreen extends React.Component {

    constructor (props){
        super(props);
        this.state = ({
            channelCode: '',
            code : 'heeder12345',


        });
    }

    channelCodeHandling = () => {
        try{
        if(this.state.channelCode.length > 10 || this.state.code != this.state.channelCode){
                Alert.alert("coder error: code has only 10 characters or Invalid code")
                return;
            } else if(this.state.code == this.state.channelcode){
                Alert.alert("Success").then (() => this.props.navigation.navigate('TestChannel'))
                return;
            }

        }catch(error){
            console.log(error.toString())
        }
    }
render(){
const {navigate} = this.props.navigation;
return (
    <View style = {styles.container}>

    <Form>
        <Item style = {styles.itemStyle}>
        <InputGroup>
            <Input
                value = {this.state.channelCode}
                style = {{color: '#fff'}}
                autoCapitalize = "none"
                autoCorrect= {false}
                placeholder="Enter Name"
                placeholderTextColor='#fff'
                onChangeText={(channelCode) => { this.setState({channelCode}) }}>
            </Input>
        </InputGroup>
        </Item>

    </Form> 
        <Button 
        styles = {styles.button}
        //confirm button (add function here)
        transparent
        //temporray navigation
        // onPress = {this.channelCodeHandling}
        //logic to redirect user in to the channel
        onPress = {() => navigate('TestChannel')}
        >
        <Text style={{color:'#fff'}}>Confirm</Text>
        </Button>

    </View>
    )
 }

}
const styles = StyleSheet.create({
 
    container: {
          flex: 1,
          backgroundColor:'#35586C',
          alignItems: 'center',
          paddingLeft: 50,
          paddingRight: 50,
      
      },
      itemStyle: {
          paddingTop: 120,
          alignItems: 'center',
          justifyContent: 'center',
      },
      inputBox: {
          width: 300,
          height: 45,
          fontSize: 15,
          color: '#fff',
        },
       
        button: {
          backgroundColor: '#73B1B7',
          width: 80,
          height: 30,
          marginVertical: 15,
          textAlign: 'center',
          justifyContent: 'center',
          marginLeft: 18,
  
       },
     
  
    })
