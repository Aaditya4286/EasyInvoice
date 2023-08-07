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

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
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
        <Text style={styles.text}>Contact Us</Text>
      </View>

<Text style={styles.text2}>Please use this form to contact us and we willget back to you as soon as possible</Text>
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
        <Text style={styles.label}>SUBJECT</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={subject}
            onChangeText={text => setSubject(text)}
            placeholder="Lorem Ipsum"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>MESSAGE</Text>
        <View style={styles.passwordContainer}>
        <TextInput
            style={[styles.input, { height: 101 }]} 
            value={message}
            onChangeText={(text) => setMessage(text)}
            placeholder="Enter your message...."
            multiline={true} 
          />
        </View>
      </View>


      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>SUBMIT</Text>
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
    marginTop: 20,
    color: 'white',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
text2: {
  marginTop:32,
  alignSelf:'center',
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
})
export default ContactUs