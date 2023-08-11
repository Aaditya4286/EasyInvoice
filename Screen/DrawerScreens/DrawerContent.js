import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import Modal from 'react-native-modal';
import Logout from './Logout';

const DrawerContent = ({ navigation }) => {
    let [logoutmodal,setLogoutModal]=useState(false)
    if(logoutmodal){
      return(
  <Modal
    isVisible={logoutmodal}
    animationIn="fadeIn"
    animationOut="fadeOut"
    onBackdropPress={() => setLogoutModal(false)}
  >
    <View style={{
       backgroundColor: 'white',
       borderRadius: 8,
       padding: 16,
    }}>
      <Logout setLogoutModal={setLogoutModal}/>
    </View>
  </Modal>
      )
    }
  
    const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
    };

    const renderDrawerItem = (label, screenName) => {
      return (
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 15 }}
          onPress={() => {
            if(screenName!=='Logout')
            return navigateToScreen(screenName)
            return setLogoutModal(true)
          }}
        >
          <Text style={styles.drawerItemText}>{label}</Text>
          <TouchableOpacity onPress={() => navigateToScreen(screenName)}>
            <Image source={require('../../assets/arrow.png')} style={{ height: 18, width: 18 }} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView>
          {renderDrawerItem('Dashboard', 'Dashboard')}
          {renderDrawerItem('Invoice Guide', 'InvoiceGuide')}
          {renderDrawerItem('Invoice Features', 'InvoiceFeatures')}
          {renderDrawerItem('About Us', 'AboutUs')}
          {renderDrawerItem('Contact Us', 'ContactUs')}
          {renderDrawerItem('Frequently Asked Questions', 'FAQ')}
          {renderDrawerItem('Terms & Conditions', 'TandC')}
          {renderDrawerItem('Privacy Policy', 'PrivacyandPolicy')}
          {renderDrawerItem('Settings', 'Settings')}
          {renderDrawerItem('Log Out', 'Logout')}
        </DrawerContentScrollView>
      </View>
    );
  };

export default DrawerContent

const styles = StyleSheet.create({
    drawerItemText: {
      flex: 1,
      fontWeight: 'bold',
      fontSize: 16,
    },
    image: {
      height: 20,
      width: 20
    },
    image1: {
      height: 60,
      width: 60,
      marginBottom: 25
    }
  });