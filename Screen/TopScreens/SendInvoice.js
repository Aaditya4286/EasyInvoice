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
import Topnavigaton from './Topnavigaton'

const SendInvoice = ({navigation}) => {
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
            source={require('../TopScreens/mode.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Send Invoice</Text>
      </View>
      <Text style={{fontSize:20, fontWeight:'600',marginTop:32,marginLeft:16,marginBottom:24}}>View Your Created and Sent {"\n"}<Text>Invoices</Text></Text>
    <Topnavigaton style={{marginTop:24}} />
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
export default SendInvoice