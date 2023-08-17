import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screen/Home';
import AboutUs from './Screen/DrawerScreens/AboutUs';
import ContactUs from './Screen/DrawerScreens/ContactUs';
import Dashboard from './Screen/DrawerScreens/Dashboard';
import InvoiceGuide from './Screen/DrawerScreens/InvoiceGuide';
import InvoiceFeatures from './Screen/DrawerScreens/InvoiceFeatures';
import FAQ from './Screen/DrawerScreens/FAQ';
import Logout from './Screen/DrawerScreens/Logout';
import PrivacyandPolicy from './Screen/DrawerScreens/PrivacyandPolicy';
import Settings from './Screen/DrawerScreens/Settings';
import TandC from './Screen/DrawerScreens/TandC';
import Intro from './Screen/Intro';
import Login from './Screen/Login';
import ForgotPassword from './Screen/ForgotPassword';
// import ChangePassword from './Screen/ChangePassword';
import SignUp from './Screen/SignUp';
import Account from './Screen/TabScreens/Account';
import CreateInvoice from './Screen/TabScreens/CreateInvoice';
import SendInvoice from './Screen/TopScreens/SendInvoice'
import History from './Screen/TopScreens/History';
import SendModal from './Screen/TopScreens/SendModal';
import Pdf from './Screen/TopScreens/Pdf';
import DrawerContent from './Screen/DrawerScreens/DrawerContent';

const Navigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
 
  const Drawers = () => {
   

    return (
      <Drawer.Navigator
        drawerContent={({ navigation }) => <DrawerContent navigation={navigation} />}
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right',
          drawerStyle: { width: 226 },
        }}
      >
        <Drawer.Screen name="HomeTabs" component={HomeTabs} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="InvoiceGuide" component={InvoiceGuide} />
        <Drawer.Screen name="InvoiceFeatures" component={InvoiceFeatures} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="FAQ" component={FAQ} />
        <Drawer.Screen name="TandC" component={TandC} />
        <Drawer.Screen name="PrivacyandPolicy" component={PrivacyandPolicy} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* <Stack.Screen name="ChangePassword" component={ChangePassword} /> */}
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    );
  };

  const HomeTabs = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon:()=>{
            return (<Image style={styles.image} source={require('./assets/home.png')}/>)
          }
        }
        }/>
        <Tab.Screen name="Create Invoice" component={CreateInvoice}
        options={{
          tabBarIcon:()=>{
            return (<Image style={styles.image1} source={require('./assets/plus1.png')}/>)
          }
        }
        }  />
        <Tab.Screen name="Account" component={Account}
        options={{
          tabBarIcon:()=>{
            return (<Image style={styles.image} source={require('./assets/circle.png')}/>)
          }
        }
        } />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Drawers" component={Drawers} />
        <Stack.Screen name="SendInvoice" component={SendInvoice} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="SendModal" component={SendModal} />
        <Stack.Screen name="Pdf" component={Pdf} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
 ``
export default Navigation;
