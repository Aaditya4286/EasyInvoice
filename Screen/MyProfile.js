import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  
} from "react-native";
const MyProfile = () => {
  return (
    <View>
    <View
        style={{
          height: 106,
          backgroundColor: "#2155CD",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 14,
          }}
        >
          <Text style={styles.text}>MY PROFILE</Text>
        </View>
        <TouchableOpacity >
          <Image
            style={styles.image1}
            source={require("../assets/set.png")}
          />
        </TouchableOpacity>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
  image1: {
    width: 36,
    height: 36,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 20,
  },
  text: {
    marginTop: 13,
    color: "white",
    marginLeft: 16,
    fontWeight: "bold",
  },
})
export default MyProfile