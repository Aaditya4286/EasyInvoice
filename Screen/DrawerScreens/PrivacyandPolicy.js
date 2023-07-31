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
      <Text style={styles.text}>Privacy Policy</Text>
    </View>
    <View style={{ flex: 1 }}>
        <ScrollView>
            <Text style={{marginTop:32, alignSelf:'center',fontSize:18, fontWeight:'bold', marginHorizontal:16}}>Our E-Invoicing website is committed to ensuring the privacy of its users and visitors. This privacy policy page outlines the information we collect, how we use it, and the measures we take to protect your data.</Text>
           
            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Information Collection</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We collect personal information such as name, address, phone number, email address, and financial information when you register with our website. We may also collect information about your use of our website, such as the pages you visit, the links you click, and the searches you make.</Text>
        
            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Use of Information</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We use the information we collect to provide you with our services, such as processing invoices and payments. We may also use your information to communicate with you regarding your account or to provide you with updates or marketing materials.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Sharing of Information</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We do not share your personal information with third parties, except as required by law or as necessary to provide you with our services. We may share your information with our affiliates or partners, but only if they agree to protect your privacy in accordance with this policy.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Security</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We take the security of your personal information seriously and employ appropriate measures to protect your data. We use industry-standard encryption technologies to protect your data during transmission and storage.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Cookies</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We use cookies to improve your experience on our website. Cookies are small text files that are stored on your computer or mobile device when you visit our website. We use cookies to remember your preferences, personalize your experience, and analyze how our website is used.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Your Rights</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>You have the right to access, correct, or delete your personal information. You may also choose to unsubscribe from our marketing communications. To exercise your rights, please contact us at the email address provided below.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Changes to this Privacy Policy</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>We reserve the right to modify this privacy policy at any time. Any changes will be posted on our website, and we encourage you to review this page periodically.</Text>

            <Text style={{marginTop:24,fontSize:24, fontWeight:'bold',marginLeft:16}}>Contact Us</Text>
            <Text style={{marginTop:8,color:'#888888',marginHorizontal:16}}>If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us at <TouchableOpacity><Text style={{color:'#2155CD'}}>ezinvoicegenerator@gmail.com
            </Text></TouchableOpacity></Text>

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
    marginLeft: 44,
    fontWeight: "bold",
    fontSize:24
  },
})

export default PrivacyandPolicy