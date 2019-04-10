import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { createAppContainer, createDrawerNavigator , createBottomTabNavigator, 
  createSwitchNavigator,createStackNavigator, DrawerItems } from 'react-navigation';

import {Button } from 'native-base';
import {Octicons} from '@expo/vector-icons';
import * as firebase from 'firebase';
import Ionicons from '@expo/vector-icons/Ionicons';
export default class Section extends React.Component {
  
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
      <View  style={styles.container}>
        <View style = {[styles.conContainer, styles.connectFlex]}>
            <View style = {styles.userCont}>
              <Text style = {styles.userText}>Connected</Text>
                <View style = {{paddingLeft: 20, paddingTop: 20}}>
                <View>
                <Text style = {styles.userTextEmail}>Elvina Garcia</Text>
                {/* <View style = {styles.borderBottom} /> */}
                </View>
                <View>
                <Text style = {styles.userTextEmail}>Paola Concubierta</Text>
                {/* <View style = {styles.borderBottom} /> */}
                </View>
                <View>
                <Text style = {styles.userTextEmail}>Reymart Casas</Text>
                <View style = {styles.borderBottom} />
                </View>
                
              </View>
            </View>
            </View>
       </View>
        <View style = {styles.border} />
        <View style= {styles.informationCont}>
            <View style = {[styles.ProfileInfoFlex, styles.ProfileInfo]}>
              <Text style = {{textAlign:'center', fontSize: 20, color: '#fff'}}>Offline</Text>
              <View style = {styles.offCont}>
              <View style = {{paddingLeft: 20, paddingTop: 20}}>
                <View>
                <Text style = {styles.userTextEmail}>Elvina Garcia</Text>
                {/* <View style = {styles.borderBottom} /> */}
                </View>
                <View>
                <Text style = {styles.userTextEmail}>Paola Concubierta</Text>
                {/* <View style = {styles.borderBottom} /> */}
                </View>
                <View>
                <Text style = {styles.userTextEmail}>Reymart Casas</Text>
                <View style = {styles.borderBottom} />
                </View>
                
              </View>
              </View>
            </View> 
        </View>
    

      <View style = {styles.liveCont}>
        <View style = {{flex: 1, alignItems:'stretch'}}>
          <Button block style = {styles.liveButton}>
          <Text style = {{color:'#000', fontSize: 17}}>START LIVE</Text>
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
    flexDirection: 'column',
    backgroundColor: '#35586C',
  },

  liveCont:{
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  liveButton:{
    paddingTop: 15,
    backgroundColor: '#fefefe',
  },
  
  
  container: {
    flex: 11,
    paddingTop: 25,
    flexDirection: 'column',
    paddingLeft: 43,     
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
      flex: 1,
      alignItems: 'stretch',
      flexDirection: 'column',
      
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
      flex: 7,
      flexDirection:'column',
      paddingLeft: 43,
        
       
  },
  ProfileInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 25,

},
borderBottom: {
    paddingTop: 10,
    borderBottomColor: 'rgba(255,255,255, 0.2)',
    borderBottomWidth: 1,
    width: 230,

},

border: {
  borderBottomColor: 'rgba(238,238,255, 0.5)',
  borderBottomWidth: 1,
  width: 525,
  marginLeft: 5,
  elevation: 1,

},

offCont:{
  flex: 1,
  alignItems: 'stretch',
  flexDirection: 'column',
},



});


