import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';

const Settings = ({navigation}) => {
  const handleSelectFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        console.log('Selected image:', result.uri);
      }
    } catch (error) {
      console.log('Image selection error:', error);
    }
  };

  const [ogname, setOgName] = useState('');
  const [ogdes, setOgDes] = useState('');
  const [email, setEmail] = useState('');
  const [pno, setPno] = useState('');
  const [web, setWeb] = useState('');
  const [ad1, setAd1] = useState('');
  const [ad2, setAd2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country1,setCountry1]=useState()
  const [vat,setVat]=useState()
  const [selectedCurrency, setSelectedCurrency] = useState('USD');


  const country = [
    { label: 'India', value: 'India' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Argentina', value: 'Argentina' },
    { label: 'Afghanistan', value:'Afghanistan' },
    { label: 'Algeria', value: 'Algeria' },
    { label: 'America', value: 'America' },
  ]
  const currencyData = [
    { label: 'USD $', value: 'USD' },
    { label: 'EUR €', value: 'EUR' },
    { label: 'GBP £', value: 'GBP' },
    { label: 'JPY ¥', value: 'JPY' },
    { label: 'CAD $', value: 'CAD' },
  ];
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
        <Text style={styles.text}>Settings</Text>
      </View>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2155CD', marginLeft: 16, marginTop: 32 }}>
          Contact Information
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ORGANIZATION NAME</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={ogname}
              onChangeText={(text) => setOgName(text)}
              placeholder="WEB PLANET SOFT TECHNOLOGIES"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ORGANIZATION DESCRIPTION</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={ogdes}
              onChangeText={(text) => setOgDes(text)}
              placeholder="WebplanetSoft is one of the Best company."
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>EMAIL</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="ssingh883710@gmail.com"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>LOGO</Text>
          <View style={styles.input2}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.imageContainer}>
                <Image style={styles.logoImage} source={require('../DrawerScreens/gal.png')} />
              </View>
              <Text style={styles.dottedLineText}>
                Drag your logo here or{'\n'}
                <Text style={styles.selectFileButton} onPress={handleSelectFile}>
                  Select a file
                </Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>PHONE NUMBER</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={pno}
              onChangeText={(text) => setPno(text)}
              placeholder="0141 302019"
              placeholderTextColor={'#000000'}
              keyboardType='numeric'
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>WEBSITE</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={web}
              onChangeText={(text) => setWeb(text)}
              placeholder="https://webplanetsoft.com/"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2155CD', marginLeft: 16, marginTop: 32 }}>
        Address
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>ADDRESS LINE 1</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={ad1}
              onChangeText={(text) => setAd1(text)}
              placeholder="560-561 Symphony Pride, Kings Rd"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ADDRESS LINE 2</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={ad2}
              onChangeText={(text) => setAd2(text)}
              placeholder="Nirman Nagar"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>CITY</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={(text) => setCity(text)}
              placeholder="Jaipur"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>STATE</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={state}
              onChangeText={(text) => setState(text)}
              placeholder="Rajasthan"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>ZIP CODE</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={zip}
              onChangeText={(text) => setZip(text)}
              placeholder="302019"
              placeholderTextColor={'#000000'}
              keyboardType='numeric'
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>COUNTRY</Text>
        <View style={styles.passwordContainer}>
        <Dropdown
        style={styles.input}
        data={country}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Country"
        searchPlaceholder="Search..."
        value={country1}
        dropdownPosition='top'
        onChange={item => {
        setCountry1(item?.value);
        }}
      />
      </View>
      </View>

      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#2155CD', marginLeft: 16, marginTop: 32 }}>
      Business Details
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>TAX ID / VAT NUMBER</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              value={vat}
              onChangeText={(text) => setVat(text)}
              placeholder="1211212"
              placeholderTextColor={'#000000'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>BASE CURRENCY</Text>
        <View style={styles.passwordContainer}>
        <Dropdown
            style={styles.input}
            data={currencyData}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="USD $"
            dropdownPosition='top'
            value={selectedCurrency}
            onChange={(item) => {
              setSelectedCurrency(item.value);
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
      const styles = StyleSheet.create({
        button: {
          backgroundColor:'#2155CD',
          width: 343,
          height: 48,
          borderRadius: 6,
          marginHorizontal: 20,
          marginTop: 39,
          marginBottom:24
        },
        buttonText: {
          alignSelf: 'center',
          color: 'white',
          top: 14,
          fontWeight: 'bold',
          fontSize: 16
        },
        dottedLineText: {
          fontSize: 14,
          // fontWeight: "bold",
          color: "#888888",
          marginLeft: 8,
          textAlign: "left",

          // textAlign: 'center',
          height:150,
          marginTop:20
          // bottom: 6
        },
        selectFileButton: {
          // padding: 8,
          // borderRadius: 4,
          textDecorationLine: "underline",
        },
        imageContainer: {
          marginRight: 8,
          justifyContent: "flex-start",
          // backgroundColor: 'yellow'
        },
        logoImage: {
          width: 20,
          height: 20,
          marginLeft: 16,
          // marginTop:15
          marginBottom:95
        },
        input2: {
          // padding:16,
          height: 86,
          borderRadius: 6,
          backgroundColor: 'white',
          elevation: 5,
          flex: 1, 
          marginTop: 6,
          width:343,
          // alignSelf:'center'
        },
        
        passwordContainer2: {
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          marginTop: 6, 
          width: 343,
          height:86
        },
        
        // dottedLineText: {
        //   fontSize: 14,
        //   fontWeight: "bold",
        //   color: "#888888",
        //   marginLeft: 8,
        //   textAlign: "left",
        //   height:150,
        //   bottom: 5
        // },
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
        text: {
          marginTop: 20,
          color: 'white',
          marginLeft: 16,
          fontWeight: 'bold',
          fontSize: 24,
        },
      })

export default Settings