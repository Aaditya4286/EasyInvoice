import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Logout = ({setLogoutModal}) => {
  const navigation = useNavigation();
 
  return (
    <View>
      <Text style={styles.text} >Are you sure you want to log out?</Text>
      <View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:50,marginTop:20}}>
      <TouchableOpacity style={styles.buttonContainer}
      onPress={()=>{setLogoutModal(false)
        navigation.navigate(
        'HomeTabs'
        )
      }}
      >
        <View style={styles.signupButton}>
          <Text style={styles.signupText1}>NO</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>YES</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#2155CD',
    width: 130,
    height: 48,
    borderRadius: 6,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:3
  },
buttonText2: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText1: {
    color: '#888888',
    top: 15,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
    bottom: 10
  },
  signupButton: {
    width: 130,
    height: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#2155CD',
    marginHorizontal: 16,
  },
})
export default Logout