import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

const Dashboard = () => {
  const [mytodo, setMyToDo] = useState('');

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
        <TouchableOpacity>
          <Image
            style={{ height: 12, width: 15, marginLeft: 18, marginTop: 20 }}
            source={require('../DrawerScreens/mode.png')}
          />
        </TouchableOpacity>
        <Text style={styles.text}>Dashboard</Text>
      </View>
      <Text style={{ marginTop: 32, marginHorizontal: 16 }}>
        Welcome to Easy Invoice Business Network — a new way to create and send invoices
      </Text>
      <Text style={{ fontSize: 12, marginTop: 24, marginLeft: 28, fontWeight: 'bold' }}>MY TO DO</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={mytodo}
          onChangeText={(text) => setMyToDo(text)}
          placeholder="Complete your business profile"
          placeholderTextColor="#DDDDDD"
        />
        <View style={styles.blueBox}>
          <TouchableOpacity>
          <Image
            style={styles.imgBox}
            source={require('../DrawerScreens/left.png')}
          />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize:20,fontWeight:'600',marginTop:32,marginLeft:16}}>My Invoices</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.circularView, { backgroundColor: '#2155CD0D' }]}>
            <Text style={styles.circularViewText}>0</Text>
          </View>
          <Text style={{ fontSize: 16, marginLeft: 8 }}>Created</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.circularView, { backgroundColor: '#2155CD0D' }]}>
            <Text style={styles.circularViewText}>0</Text>
          </View>
          <Text style={{ fontSize: 16, marginLeft: 8 }}>Sent</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>SEE ALL</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor:'#2155CD',
    width: 343,
    height: 48,
    borderRadius: 6,
    marginLeft:26,
    marginTop: 24
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    top: 14,
    fontWeight: 'bold',
    fontSize: 16
  },
  circularView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularViewText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  blueBox: {
    backgroundColor: '#2155CD',
    borderRadius: 6,
    padding: 8,
    top:3,
    marginRight:5,
    height:40,
    width:40
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: '#2155CD',
    padding: 10,
    marginRight: -8,
    borderRadius: 6,
    marginTop:6
  },
  imgBox: {
    height: 12,
    width: 16,
    tintColor: 'white', 
    top:5,
    left:4
  },
  text: {
    marginTop: 20,
    color: 'white',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Dashboard;
