import { StyleSheet } from 'react-native';

export default StyleSheet.create({

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
          flex: 2,
          flexDirection:'column',
          backgroundColor: '#35586C',  
           
      },
      ProfileInfo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
});