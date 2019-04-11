//teacher UI

import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createAppContainer, createDrawerNavigator , createBottomTabNavigator, 
  createSwitchNavigator,createStackNavigator, DrawerItems } from 'react-navigation';

import {Button } from 'native-base';
import {Octicons} from '@expo/vector-icons';
import * as firebase from 'firebase';
import Ionicons from '@expo/vector-icons/Ionicons';


export default class StudSection extends React.Component {
  
  static navigationOptions = {
    title: 'Sample Class',
    tabBarVisible: false,
    
    headerTitleStyle: {
      fontSize: 17,
      marginLeft: 20,
  },
  
  headerStyle: {
    height: 43,
  },

  headerLeft: ( 
    
                <Button transparent
                      onPress = {() => this.props.navigation.navigate('Channels')}
                        style = {{marginLeft: 10,}}>
                    <Ionicons name ='md-arrow-back' size = {20} color = '#000' 
                        />
                </Button>
                ),
  

};
    render() {
      
        return (
   //<ScrollView style = {styles.scrollCont}>   

    <View style = {styles.overallCont}>
    <View style = {{flex: 14, flexDirection:'row', paddingTop: 25,}}>
      <View  style={styles.container}>
        <View style = {[styles.conContainer, styles.connectFlex]}>
            <View style = {styles.userCont}>
              <Text style = {styles.userText}>Connected</Text>
                <View style = {{paddingLeft: 20}}>
                <Text style = {styles.userTextEmail}>Elvina Garcia</Text>
                {/* <View style = {styles.borderBottom} /> */}
                <Text style = {styles.userTextEmail}>Paola Concubierta</Text>
                {/* <View style = {styles.borderBottom} /> */}
                <Text style = {styles.userTextEmail}>Reymart Casas</Text>
                {/* //<View style = {styles.borderBottom} /> */}
                </View>
              </View>
            </View>
       </View>
        <View style = {styles.border} >
        <View style = {styles.borderLeft} />
        </View>
        <View style= {styles.informationCont}>
            <View style = {[styles.ProfileInfoFlex, styles.ProfileInfo]}>
              <Text style = {{fontSize: 20, color: '#fff'}}>Offline</Text>
              <View style = {styles.offCont}>
              <View style = {{paddingLeft: 20}}>
                <Text style = {[styles.userTextEmail, {paddingTop: 5, color: 'rgba(255,255,255, 0.5)'}]}>Tony Stark</Text>
                
                <Text style = {styles.userTextLog}>Carol Danvers</Text>
                {/* <View style = {styles.borderBottom} /> */}
                <Text style = {styles.userTextLog}>Steven Rogers</Text>
                {/* <View style = {styles.borderBottom} /> */}
              </View>
              </View>
            </View> 
        </View>
        </View>
    

      < View style = {styles.liveCont}>
          <View style = {{flex: 1, alignItems:'stretch'}}>
            <Button block style = {styles.liveButton}>
            <Text style = {{color:'#000', fontSize: 17}}>----</Text>
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
  },
  
  overallCont:{
    flex: 1,
    backgroundColor: '#35586C',
    justifyContent: 'center',
    marginBottom: 0,
  },

  liveCont:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  liveButton:{
    paddingTop: 15,
    backgroundColor: '#fefefe',
    height: 60,
  },
  
  
  container: {
    flex: 1,
    flexDirection: 'column',
    //paddingLeft: 43,     
  },
  text : {
    fontSize: 18,
    color: '#fff',
  },

  
  conContainer: {
      flex: 1,
      alignItems: 'flex-start',
  },
  connectFlex: {
      flex: 1,
      
  },

  userCont: {
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      paddingLeft: 20,
      
  },
  userText: {
      color: '#fff',
      fontSize: 20,
      paddingTop: 20,
  },
  userTextEmail: {
    color: 'rgba(255,255,255, 0.7)',
    paddingTop: 8,
    fontSize: 13,
  },
  userTextLog: {
    color: 'rgba(255,255,255, 0.5)',
    paddingTop: 8,
    fontSize: 13,
  },

  offText: {
    color: 'rgba(255,255,255, 0.4)',
    paddingTop: 8,
    fontSize: 13,
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
      alignItems: 'flex-start',
      paddingTop: 20,
        
       
  },
  ProfileInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

},
borderLeft: {
    borderLeftColor: 'rgba(255,255,255, 0.2)',
    borderLeftWidth: 1,

},

border: {
  flex: 1,
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent:'center',
  elevation: 1,

},

offCont:{
  flex: 1,
  alignItems: 'stretch',
  flexDirection: 'column',
},



});


