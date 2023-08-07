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

const InvoiceFeatures = ({navigation}) => {
  const onPress=() =>{
    navigation.navigate('Home')
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 106, backgroundColor: "#2155CD", flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity onPress={onPress}>
          <Image style={{ height: 12, width: 15, marginLeft: 18,marginTop:20 }} source={require('../DrawerScreens/mode.png')} /></TouchableOpacity>
        <Text style={styles.text}>Invoice Features</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View>
            {data.map((item) => {
              return (
                <View style={styles.itemContainer} key={item.id}>
                  <View style={styles.whiteBox}>
                    <Image style={styles.itemImage} source={item.image} />
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText2}>{item.value}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#F5F5F5",
    height: 157,
    width: 343,
    alignSelf: "center",
    marginBottom: 15, 
  },
  whiteBox: {
    backgroundColor: "white", 
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginTop:16
  },

  itemImage: {
    marginTop: 5,
    width: 45,
    height: 45,
    resizeMode:'contain',
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