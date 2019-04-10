import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity} from 'react-native';
import { createAppContainer, createDrawerNavigator , createBottomTabNavigator, 
        createSwitchNavigator,createStackNavigator, DrawerItems } from 'react-navigation';
// import Drawer from './Drawer/Drawer';
import Channels from '../screens/Channels';
// import Settings from '../screens/Settings';
import Profile from '../screens/Profile';
import {NavigationActions} from 'react-navigation';
import AddClassScreen from '../CrudScreens/AddClassScreen';
import Icon from '@expo/vector-icons/Ionicons';
import { Button } from 'native-base';
import * as firebase from 'firebase';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
}

  

  render(){
    return <AppContainer />
    
  }
}


// const CustomDrawerComponent = (props) => (
//   <SafeAreaView style = {{flex: 1,}}>
//     <ScrollView>
//       <View style = {{paddingTop:30}}></View>
//       <DrawerItems style = {{backgroundColor:'#35586C'}} {...props} />
//     </ScrollView>
//     <TouchableOpacity>
//       <View style={styles.item}>
//         <Button onPress ={this.onLogoutPress}
//         transparent
//         style = {{color: '#000'}}>
//           <Text style={styles.label}>Logout</Text>
//           </Button>
//    </View>
//   </TouchableOpacity>
//   </SafeAreaView>
  
  
// )


const TabNavigator = createBottomTabNavigator (
  {

   Channels,

   Profile,

   AddClassScreen,
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
  }
}, 
  tabBarOptions: {
    showLabel: false
    },

})

const AppStackNavigator = createStackNavigator ({
  TabNavigator: TabNavigator
},{
  defaultNavigationOptions:({navigation}) => {
    return{
      headerLeft: (
        <Icon style ={{paddingLeft: 20, paddingTop: -10}}
         onPress={()=>navigation.openDrawer()}
        name="md-menu" size={30}/>
      )
    }         
  }
  });

  AppStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
       tabBarVisible = false;
    }
    return {
       tabBarVisible
    };
  };

const AppDrawerNavigator = createDrawerNavigator({
  
    Heeder: {
      screen: AppStackNavigator,
    },

    Channels: {
     
      screen: Channels, 
      
    },

    "Add Class" : {
      screen: AddClassScreen,
      
    
    },

    "Profile" : {
      screen: Profile,
    }
    
   },
  //  {
  //    contentComponent: Drawer,
  //    drawerWidth: 300,
  
  //  }
  ); 
 
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    iconContainer: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
  })
 

const AppSwitchNavigator = createSwitchNavigator({
  Home: { 
    screen: AppDrawerNavigator,
    header: null,
  },
 
})


const AppContainer = createAppContainer(AppSwitchNavigator);