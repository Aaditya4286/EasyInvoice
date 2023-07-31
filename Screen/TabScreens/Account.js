import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  const [newpassword, setNewPassword] = useState('');
  const [securenewpassword, setSecureNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [secureconfirmpassword, setSecureConfirmPassword] = useState(true);

  return (
    <View>
      
    <View
        style={{
          height: 106,
          backgroundColor: "#2155CD",
          paddingTop: 40,
        }}
      >
      <Text style={styles.text}>Edit Profile</Text>
    </View>
    <View style={styles.inputContainer}>
    <Text style={styles.label}>NAME</Text>
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="John Smith"
      />
    </View>
  </View>
  <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL ID</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="prem@yopmail.com"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>CURRENT PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="*******"
            secureTextEntry={securePassword}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setSecurePassword(!securePassword)}
          >
            <Image
              style={styles.eyeIcon}
              source={require('../TabScreens/eye.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>NEW PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={newpassword}
            onChangeText={text => setNewPassword(text)}
            placeholder="*******"
            secureTextEntry={securenewpassword}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setSecureNewPassword(!securenewpassword)}
          >
            <Image
              style={styles.eyeIcon}
              source={require('../TabScreens/eye.png')}
            />
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>CONFIRM PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={confirmpassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholder="*******"
            secureTextEntry={secureconfirmpassword}
          />
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setSecureConfirmPassword(!secureconfirmpassword)}
          >
            <Image
              style={styles.eyeIcon}
              source={require('../TabScreens/eye.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>


  </View>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor:'#2155CD',
    width: 343,
    height: 48,
    borderRadius: 6,
    marginHorizontal: 20,
    marginTop: 39
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    top: 14,
    fontWeight: 'bold',
    fontSize: 16
  },
text: {
  marginTop: 13,
  color: "white",
  marginHorizontal: 16,
  fontWeight: "bold",
  fontSize:24
},
inputContainer: {
  marginLeft: 20,
  marginTop: 32,
  shadowColor: '#00000033',
  shadowOffset: { width: 3, height: 3 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
},
label: {
  marginBottom: 4,
  fontSize: 12,
  fontWeight: 'bold',
  marginLeft: 12,
},
passwordContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  marginTop: 6, 
  width: 343
},
input: {
  paddingHorizontal: 15,
  height: 48,
  borderRadius: 6,
  backgroundColor: 'white',
  elevation: 5,
  flex: 1, 
},
passwordToggle: {
  position: 'absolute',
  right: 10,
},
eyeIcon: {
  resizeMode: 'contain',
  height: 18,
  width:20,
  right: 7
},
})
export default Account