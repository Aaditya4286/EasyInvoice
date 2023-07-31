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

const PrivacyandPolicy = () => {
  return (
    <View style={{ flex: 1 }}>
    <View
        style={{
          height: 106,
          backgroundColor: "#2155CD",
          paddingTop: 40,
        }}
      >
      <Text style={styles.text}>Terms & Conditions</Text>
    </View>
    <View style={{ flex: 1 }}>
        <ScrollView>
            <Text style={{marginTop:32, alignSelf:'center',fontSize:18, fontWeight:'bold',marginHorizontal:12}}>Welcome to our invoice generator website! Before using our service, we kindly ask you to read and agree to the following terms and conditions.</Text>
           
            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Agreement to Terms</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>By using our invoice generator website, you agree to be bound by these terms and conditions, as well as any applicable laws and regulations.</Text>
        
            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Use of Service</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>Our invoice generator website provides a service to create and send professional invoices. You may only use this service for lawful purposes and in accordance with these terms and conditions.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>User Accounts</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>To use our invoice generator website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify us immediately of any unauthorized access to your account.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Intellectual Property</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>Our invoice generator website and all of its contents, including but not limited to text, graphics, images, logos, and software, are the property of our company or our content suppliers and are protected by intellectual property laws.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>User Content</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>By using our invoice generator website, you agree to allow us to use any content you provide in the creation of your invoices, such as your business name and logo.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Disclaimer of Warranties</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>Our invoice generator website and all of its contents are provided "as is" without any warranties, express or implied. We make no warranties or representations regarding the accuracy or completeness of the content on our website.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Limitation of Liability</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>Our company and its affiliates, directors, officers, employees, and agents shall not be liable for any damages, including but not limited to direct, indirect, incidental, consequential, or punitive damages, arising from the use or inability to use our invoice generator website.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Indemnification</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>You agree to indemnify and hold our company and its affiliates, directors, officers, employees, and agents harmless from any claims, damages, expenses, or losses, including reasonable attorney's fees, arising from your use of our invoice generator website.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Governing Law and Jurisdiction</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>These terms and conditions shall be governed by and construed in accordance with the laws of the state in which our company is located. Any dispute arising from these terms and conditions shall be resolved exclusively in the courts located in that state.</Text>

            <Text style={{marginTop:24,fontSize:16, fontWeight:'600',textAlign:'center'}}>Thanks For Visiting Our Site{"\n"}<Text style={{textAlign:'center',fontSize:16, fontWeight:'600',color:'#2155CD'}}>Have a nice day !</Text></Text>

        </ScrollView>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 13,
    color: "white",
    marginLeft:44,
    fontWeight: "bold",
    fontSize:24
  },
})

export default PrivacyandPolicy