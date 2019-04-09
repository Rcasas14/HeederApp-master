import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Button } from 'native-base';
import * as firebase from 'firebase';

export default class Section extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
        return (
   //<ScrollView style = {styles.scrollCont}>   

    <View style = {styles.overallCont}>
      <View  style={styles.container}>
        <View style = {[styles.conContainer, styles.connectFlex]}>
            <View style = {styles.userCont}>
              <Text style = {styles.userText}>Connected</Text>
              {/* <Text style = {styles.userTextEmail}>juan.delacruz123@gmail.com</Text> */}
            </View>
            </View>
       </View>

        <View style= {styles.informationCont}>
            <View style = {[styles.ProfileInfoFlex, styles.ProfileInfo]}>
              <Text style = {{textAlign:'center', fontSize: 20, color: '#fff'}}>Offline</Text>
            </View> 
        </View>
    

      <View style = {styles.liveCont}>
        <View style = {{flex: 1, alignItems:'stretch'}}>
          <Button block style = {styles.liveButton}>
          <Text style = {{color:'#ffffee', fontSize: 25}}>Start Live</Text>
        </Button>
       </View>
      </View>
      </View>

     // </ScrollView>
        );
    }
}
const styles = StyleSheet.create ({
  
  scrollCont:{
    paddingLeft: 15,
    backgroundColor: '#35586C',
  },
  
  overallCont:{
    flex: 1,
    flexDirection: 'column',
  },

  liveCont:{
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  liveButton:{
    backgroundColor: 'darkgray',
  },
  
  
  container: {
    flex: 11,
    paddingTop: 25,
    flexDirection: 'column',
    backgroundColor: '#35586C',     
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
  conContainer: {
      flex: 1,
      alignItems: 'flex-start',
  },
  connectFlex: {
      flex: 1,
      
  },

  userCont: {
      alignItems: 'flex-start',
      
  },
  userText: {
      color: '#fff',
      fontSize: 20,
      paddingTop: 20,
  },
  userTextEmail: {
    color: 'rgba(255,255,255, 0.6)',
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
      flex: 7,
      flexDirection:'column',
      backgroundColor: '#35586C',
        
       
  },
  ProfileInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

},
});
