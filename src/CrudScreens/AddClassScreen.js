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
        <Item>
        <InputGroup>
            <Input
            value = {this.state.channelName}
            style = {{color: '#fff'}}
            autoCapitalize = "none"
            autoCorrect= {false}>
            <Text>Name</Text>
            </Input>
        </InputGroup>
        </Item>

    </Form> 
        <Button
        //confirm button to add new channel in crud (add function here)
        transparent
        //temporray navigation
        onPress = {() => navigate('Channel')}
        //this channel name will navigate to the newly created channel
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
   

});
