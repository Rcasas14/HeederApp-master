import PropTypes from 'prop-types';
import React from 'react';
import {ScrollView, Text, View, StyleSheet, Button} from 'react-native';

export default class Drawer extends React.Component {
    
    // onPressAddClass = () => {
    //     var navActions = NavigationActions.reset({
    //         index: 0,
    //         actions: [NavigationActions.navigate({routeName: "AddClassScreen"})]
    //     });
    //     this.props.navigation.dispatch(navActions);
    // }


  render () {
      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              HEEDER
            </Text>
            <View style={styles.navSectionStyle}>
            <Button
                onPress={() => navigate('AddClassScreen')}
                >
              <Text style={styles.navItemStyle}>
              Add class
              </Text>
               </Button>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text>
                Profile
              </Text>
              <Text>
                Page3
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
    
  }
  
}


Drawer.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
    
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 10
      },
      navSectionStyle: {
        backgroundColor: 'lightgrey'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey',
    }

});
