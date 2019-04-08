import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Button } from 'native-base';
import * as firebase from 'firebase';
import ProfileStyles from './../styles/ProfileStyles';

export default class Profile extends React.Component {
    static navigationOptions = {
       header: null,

      
    };

    onSignoutPress = () => {
      firebase.auth().signOut().then(() => this.props.navigation.navigate('Login'));
     //onPress = {() => navigate('Login')}
    }

    render() {
      const {navigate} = this.props.navigation;
        return (
       <View style = {{flex: 1,}}>
          <View  style={ProfileStyles.container}>
          <View style = {[ProfileStyles.imageContainer, ProfileStyles.ImageFlex]}>
            <Image style = {ProfileStyles.ImageStyle} source = {require('../images/student.png')} />
              <View style = {ProfileStyles.userCont}>
                <Text style = {ProfileStyles.userText}>Juan Dela Cruz</Text>
                <Text style = {ProfileStyles.userTextEmail}>juan.delacruz123@gmail.com</Text>
              </View>
          <View style = {ProfileStyles.buttonSpacing}>     
            <Button
              style = {ProfileStyles.buttonStyle}
              onPress = {this.onSignoutPress}>
              <Text style = {ProfileStyles.text}>Logout</Text>
            </Button>
          </View> 
        </View>
      </View>
      <View style= {ProfileStyles.informationCont}>
        <View style = {[ProfileStyles.ProfileInfoFlex, ProfileStyles.ProfileInfo]}>
          <Text style = {{textAlign:'center', fontSize: 20,}}>Info</Text>
        </View> 
      </View>
       </View>
      
      
        );
    }
}
