import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screen/Home';
import AboutUs from './Screen/DrawerScreens/AboutUs';
import ContactUs from './Screen/DrawerScreens/ContactUs';
import Dashboard from './Screen/DrawerScreens/Dashboard';
import InvoiceGuide from './Screen/DrawerScreens/InvoiceGuide';
import InvoiceFeatures from './Screen/DrawerScreens/InvoiceFeatures';
import Intro from './Screen/Intro';
import Login from './Screen/Login';
import ForgotPassword from './Screen/ForgotPassword';
import ChangePassword from './Screen/ChangePassword';
import SignUp from './Screen/SignUp';
import MyProfile from './Screen/MyProfile';

const Navigation = () => {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const Drawers = () => {
    const DrawerContent = ({ navigation }) => {
      return (
        <DrawerContentScrollView >
          <DrawerItem label="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
          <DrawerItem label="Invoice Guide" onPress={() => navigation.navigate('InvoiceGuide')} />
          <DrawerItem label="Invoice Features" onPress={() => navigation.navigate('InvoiceFeatures')} />
          <DrawerItem label="About Us" onPress={() => navigation.navigate('AboutUs')} />
          <DrawerItem label="Contact Us" onPress={() => navigation.navigate('ContactUs')} />
        </DrawerContentScrollView>
      );
    };

    // const DrawerContent = ({ navigation }) => {
    //   return (
    //   <View style={{height:300,backgroundColor:"blue"}}>

    //   </View>
    //   );
    // };

    return (
      <Drawer.Navigator
        drawerContent={props=()=> <DrawerContent/>}
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
          drawerStyle: { width: 226
           }
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="InvoiceGuide" component={InvoiceGuide} />
        <Drawer.Screen name="InvoiceFeatures" component={InvoiceFeatures} />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
      </Drawer.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Drawers" component={Drawers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
