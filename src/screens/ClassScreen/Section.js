import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Button } from 'native-base';
import * as firebase from 'firebase';

export default class Section extends React.Component {
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
          <View  style={style.container}>
          <View style = {[style.imageContainer, style.ImageFlex]}>
              <View style = {style.userCont}>
                <Text style = {style.userText}>Connected</Text>
                <Text style = {style.userTextEmail}>juan.delacruz123@gmail.com</Text>
              </View>
          <View style = {style.buttonSpacing}>     
            <Button
              style = {style.buttonStyle}
              onPress = {this.onSignoutPress}>
              <Text style = {style.text}>Logout</Text>
            </Button>
          </View> 
        </View>
      </View>
      <View style= {style.informationCont}>
        <View style = {[style.ProfileInfoFlex, style.ProfileInfo]}>
          <Text style = {{textAlign:'center', fontSize: 20, color: '#fff'}}>Offline</Text>
        </View> 
      </View>
       </View>
      
      
        );
    }
}
const style = StyleSheet.create ({
  container: {
    flex: 1,
    paddingTop: 65,
    flexDirection: 'column',
    backgroundColor: '#ffeee4',      
  },
  text : {
    fontSize: 18,
    color: '#fff',
  },

  ImageStyle: {
      width: 150,
      height: 176,
      borderRadius: 150/2,

  },
  imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  ImageFlex: {
      flex: 1,
      
  },

  userCont: {
      alignItems: 'center',
      justifyContent: 'center',
  },
  userText: {
      color: '#000',
      fontSize: 20,
      paddingTop: 20,
  },
  userTextEmail: {
    color: 'rgba(0,0,0, 0.6)',
    fontSize: 15,
  },
  buttonSpacing: {
      paddingTop: 13,
      paddingBottom: 13,
  },
  buttonStyle: {
    backgroundColor: '#73B1B7',
    width: 80,
    height: 30,
    marginVertical: 10,
    // marginLeft: 100,
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 6,
  },
  ProfileInfoFlex: {
      
  },

  informationCont: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#35586C',  
       
  },
  ProfileInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

},
});
