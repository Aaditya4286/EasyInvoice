import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput
} from "react-native";
 
const InvoiceGuide = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
    <View style={{ height: 106, backgroundColor: "#2155CD", flexDirection: 'row', alignItems: 'center', }}>
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Image style={{ height: 12, width: 15, marginLeft: 18,marginTop:20 }} source={require('../DrawerScreens/mode.png')} /></TouchableOpacity>
        <Text style={styles.text}>Invoice Guide</Text>
      </View>
    <View style={{ flex: 1 }}>
        <ScrollView>
    <Text style={{marginTop:32, textAlign:'center', fontWeight:'400',marginHorizontal:16}}>Create & download invoices for free, If you want to save your invoice data on cloud just create your account.</Text>
    <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>CREATE INVOICE NOW</Text>
      </TouchableOpacity>

<Text style={{marginTop:32, textAlign:'center', fontWeight:'bold',fontSize:24}}>Step 1</Text>
<Text style={{marginTop:8,textAlign:'center',color:'#888888'}}>To start the invoice generate process, you will need to create an account. <TouchableOpacity><Text style={{color:'#2155CD',top:3}}>Sign Up!</Text></TouchableOpacity></Text>

<Image style={{height:330,width:162,alignSelf:'center',marginTop:20}}
       source={require('../DrawerScreens/mask.png')} />

<Text style={{marginTop:32, textAlign:'center', fontWeight:'bold',fontSize:24}}>Step 2</Text>
<Text style={{marginTop:8,textAlign:'center',color:'#888888',marginHorizontal:16}}>Creating an invoice using the Easy Invoice Generator is quick and easy. Simply fill out the fields on the form, and choose to either send the invoice directly or download it to send later.</Text>

<Image style={{height:330,width:162,alignSelf:'center',marginTop:20}}
       source={require('../DrawerScreens/mask2.png')} />
      </ScrollView>
      </View>
    </View>
  )}
  const styles = StyleSheet.create({
    text: {
      marginTop: 20,
      color: "white",
      fontWeight: "bold",
      fontSize:24,
      marginLeft:16 
    },
    button: {
      backgroundColor:'#2155CD',
      width: 343,
      height: 48,
      borderRadius: 6,
      marginLeft:26,
      marginTop: 24
    },
    buttonText: {
      alignSelf: 'center',
      color: 'white',
      top: 14,
      fontWeight: 'bold',
      fontSize: 16
    },
  })

export default InvoiceGuide