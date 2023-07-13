import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);

  const handleLogin = () => {
    // if(validateEmail && password.length>5){
    //   setEmail('')
    //   setPassword('')
    //   return navigation.navigate('')
    // }
    // if(!email){
    //   return Alert.alert("Please Enter the E-mail")
    // }
    // if(!validateEmail()){
    //   return Alert.alert('Please Enter Proper E-mail')
    // }
    // if(!password){
    //   return Alert.alert("Please Enter Password")
    // }
    // if(!password.length<6){
    //   return Alert.alert("Password must be of 6 Characters")
    // }  

  };

  const validateEmail = () => {
    // if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email))
    // {
    // return true
    // }    
    // return false
  };

  return (
    <View>
      <Image style={styles.image} source={require("../assets/ei.png")} />
      <Text style={styles.text}>Log In</Text>

      <View style={styles.inputContainer}>
  <Text style={styles.label}>EMAIL ID</Text>
  <View style={styles.passwordContainer}>
  <TextInput
    style={styles.input} 
    value={email}
    onChangeText={text => setEmail(text)}
    placeholder="prem@yopmail.com"
    keyboardType='email-address'
  />
</View>
</View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>PASSWORD</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder="Enter your password"
            secureTextEntry={securePassword}
            onEndEditing={handleLogin}
          />

          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setSecurePassword(!securePassword)}
          >
            <Image
              style={styles.eyeIcon}
              source={require('../assets/eye.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
        <Text style={styles.text2}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Drawers')}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('SignUp')}>
        <View style={styles.signupButton}>
          <Text style={styles.signupText}>Don't have an Account? Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
    textAlign: 'right',
    marginRight: 26,
    fontWeight: '400',
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginLeft: 20,
    marginTop: 20,
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
  passwordToggle: {
    position: 'absolute',
    right: 10,
  },
  eyeIcon: {
    resizeMode: 'contain',
    height: 18,
  },
  button: {
    backgroundColor:'#2155CD',
    width: 343,
    height: 48,
    borderRadius: 6,
    marginHorizontal: 16,
    marginTop: 39
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    top: 14,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonContainer: {
    marginTop: 282,
    alignItems: 'center',
  },
  signupButton: {
    width: 343,
    height: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2155CD',
    marginHorizontal: 16,
  },
  signupText: {
    color: '#2155CD',
    top: 15,
  },
});

export default Login;
