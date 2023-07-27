import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    fetch('https://invoice-generator-backend-testing.onrender.com/api/auth/forget',
     {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          navigation.navigate('Login');
        } else {
          Alert.alert('Authentication Failed', data.message);
        }
      })
      .catch(error => {
        Alert.alert('Error', 'An error occurred while resetting password.');
        console.error(error);
      });
  };


  return (
    <View>
    <Image style={styles.image} source={require("../assets/ei.png")} />
    <Text style={styles.text}>Forgot Password</Text>
    <Text style={styles.text2}>Enter your email address and we will help you recover your password.</Text>

    <View style={styles.inputContainer}>
  <Text style={styles.label}>EMAIl</Text>
  <View style={styles.passwordContainer}>
  <TextInput
    style={styles.input} 
    value={email}
    onChangeText={text => setEmail(text)}
    keyboardType='email-address'
  />
</View>
<TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>RESET PASSWORD</Text>
      </TouchableOpacity>
</View>
    </View>
  )
}
const styles = StyleSheet.create({
  image: {
    height: 34,
    width: 110,
    marginTop: 76,
    marginLeft: 16,
  },
  text: {
    marginTop: 40,
    color: '#2155CD',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  text2: {
    marginTop: 12,
    marginLeft: 16,
    textAlign: 'left'
  },
  inputContainer: {
    marginLeft: 20,
    marginTop: 60,
    shadowColor: '#00000033',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10, 
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
  button: {
    backgroundColor:'#2155CD',
    width: 343,
    height: 48,
    borderRadius: 6,
    marginHorizontal: 16,
    marginTop: 32,
    marginLeft: -1
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    top: 14,
    fontWeight: 'bold',
    fontSize: 16
  },
})

export default ForgotPassword