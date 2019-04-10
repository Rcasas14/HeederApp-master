import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, Alert} from 'react-native';
import {Button, Form, Item, Input, floatingLabel, Label, InputGroup} from 'native-base';
import * as firebase from 'firebase';



export default class AddClassScreen extends React.Component {

    constructor (props){
        super(props);
        this.state = ({
            channelName: '',


        });
    }

render(){
    const {navigate } = this.props.navigation;
    return (
<View style = {styles.container}>
    <Form>
        <Item style = {styles.itemStyle}>
        <InputGroup>
        
            <Input floatingLabel
                value = {this.state.channelName}
                style = {styles.inputBox}
                autoCapitalize = "none"
                autoCorrect= {false}
                placeholder="Enter Name"
                placeholderTextColor='#fff'
                onChangeText = {(channelName) => this.setState({channelName})}/>
            
        </InputGroup>
        </Item>

    </Form> 
        <Button style = {styles.button}
        //confirm button to add new channel in crud (add function here)
        transparent
        //temporray navigation
            // onPress = {() => navigate('Channels')}
        //this channel name will navigate to the newly created channel
        >
        <Text style={{color:'#fff',}}>Confirm</Text>
        </Button>
        <Button style = {styles.button}
        //confirm button to add new channel in crud (add function here)
        transparent
        //temporray navigation
            onPress = {() => navigate('Channels')}
        //this channel name will navigate to the newly created channel
        >
        <Text style={{color:'#fff',}}>Back</Text>
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
   

});
