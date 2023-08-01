import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList
} from "react-native";

const data = [
  {
    id: "1",
    image: require("../DrawerScreens/dollar.png"),
    name: "Streamlined Invoicing Process",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "2",
    image: require("../DrawerScreens/nvb.png"),
    name: "Professional And Customizable Invoices",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "3",
    image: require("../DrawerScreens/flo.png"),
    name: "Automation And Time-Saving",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "4",
    image: require("../DrawerScreens/hoy.png"),
    name: "Accurate Financial Tracking",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "5",
    image: require("../DrawerScreens/dollar.png"),
    name: "Payment Integration And Faster Payments",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "6",
    image: require("../DrawerScreens/try.png"),
    name: "Data Security And Backup",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "7",
    image: require("../DrawerScreens/flow.png"),
    name: "Multiple Business Invoice Templates",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "8",
    image: require("../DrawerScreens/vice.png"),
    name: "Download Invoice In Any Format",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
  {
    id: "9",
    image: require("../DrawerScreens/line.png"),
    name: "Direct Mail Facility",
    value: "Easy invoice is a completely user friendly GST invoice generator online software.",
  },
];

const InvoiceFeatures = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 106, backgroundColor: "#2155CD", flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity><Image style={{ height: 12, width: 15, marginLeft: 18,marginTop:20 }} source={require('../DrawerScreens/mode.png')} /></TouchableOpacity>
        <Text style={styles.text}>Invoice Features</Text>
      </View>
    <View style={{flex:1}}>
      <ScrollView>
      <View>
            {
            data.map((item) => {
              return (
                 <View key={item.id}>
                  <Image style={styles.itemImage} source={item.image} />
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemText2}>{item.value}</Text>
                </View>
                 );
                })}
               </View>
      </ScrollView>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  itemImage: {
    marginLeft: 16,
    marginTop: 24,
    width: 50,
    height: 50,
    alignSelf:'center'
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
        top: 12,
    textAlign:'center'
  },
  itemText2: {
    fontSize: 14,
    marginTop: 16,
    color: '#888888',
    textAlign:'center'
  },
  text: {
    marginTop: 20,
    color: "white",
    marginLeft: 15,
    fontWeight: "bold",
    fontSize:24
  },
})
export default InvoiceFeatures