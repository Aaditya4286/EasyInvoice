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

const AboutUs = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 106,
          backgroundColor: '#2155CD', 
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Image
            style={{ height: 12, width: 15, marginLeft: 18, marginTop: 20 }}
            source={require('../DrawerScreens/mode.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>About Us</Text>
      </View>
      <ScrollView style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
<Text style={{marginTop:32, alignSelf:'center',fontSize:18, fontWeight:'bold'}}>Welcome To Easy Invoice Generator</Text>

<Image style={{height:185,width:315,alignSelf:'center'}}
 source={require('../DrawerScreens/up1.png')} />

<Text style={{color:'#888888',textAlign:'center', marginVertical:10,marginHorizontal:16}}>Easy Invoice Generator is a Professional E- Invoicing Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of E- Invoicing, with a focus on dependability and E- Invoice In seconds. We're working to turn our passion for E- Invoicing into a booming online website. We hope you enjoy our E- Invoicing as much as we enjoy offering them to you.
{"\n"}{"\n"}I will keep posting more important posts on my Website for all of you. Please give your support and love.</Text>

<Text style={{fontSize:16,fontWeight:'600', textAlign:"center"}}>Thanks For Visiting Our Site</Text>
    
<Text style={{fontSize:18,fontWeight:'600', textAlign:"center", color:"#2155CD"}}>Have a nice day !</Text>
</ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: 'white',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
})
export default AboutUs