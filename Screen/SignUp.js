import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
import { Dropdown } from 'react-native-element-dropdown';
const ChangePassword = ({navigation}) => {
  const [name, setName] = useState('');
  const [companyname, setCompanyname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true);
  // const [country, setCountry] = useState('');
  const [value, setValue] = useState(null);

  const data = [
    { label: 'India', value: '1' },
    { label: 'Australia', value: '2' },
    { label: 'Argentina', value: '3' },
    { label: 'Afghanistan', value: '4' },
    { label: 'Algeria', value: '5' },
    { label: 'America', value: '6' },
    { label: 'France', value: '7' },
    { label: 'Canada', value: '8' },
  ];
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
      <Text style={styles.text}>Sign Up</Text>

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
        <Text style={styles.label}>COMPANY NAME</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={companyname}
            onChangeText={text => setCompanyname(text)}
            placeholder="Epsoft pvt ltd"
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
        <Text style={styles.label}>PASSWORD</Text>
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
              source={require('../assets/eye.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>COUNTRY</Text>
        <View style={styles.passwordContainer}>
        <Dropdown
        style={styles.input}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        searchPlaceholder="Search..."
        value={value}
        dropdownPosition='top'
        onChange={item => {
          setValue(item.value);
        }}
       
      />
      </View>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate('Login')}>
        <View style={styles.signupButton}>
          <Text style={styles.signupText}>Already have an Account? Login</Text>
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
    width:20,
    right: 7
  },
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
  buttonContainer: {
    marginTop: 28,
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
  countryIcon: {
    resizeMode: 'contain',
    height: 7,
    width: 13,
    position: 'absolute',
    right: 20,
  },
  dropdownContainer: {
    height: 48,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginTop: 10,
    alignSelf: 'center',
    marginLeft: -10 ,
    height: 48,
  },
  dropdown: {
    backgroundColor: 'white',
    borderColor: '#2155CD',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    marginTop: 2,
    backgroundColor: 'white',
    elevation: 5,
  },
  
});

export default ChangePassword;