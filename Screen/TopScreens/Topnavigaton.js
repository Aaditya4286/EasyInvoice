import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import SendModal from './SendModal';

const CreatedScreen = () => {
  const [search, setSearch] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = (date) => {
    console.log('Selected date: ', date);
    const formattedDateStr = formatDate(date); 
    setFormattedDate(formattedDateStr); 
    setShipTo(date.toISOString().split('T')[0]);
    hideDatePicker();
  };
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input2}
          value={formattedDate}
          editable={false}
          placeholder="search by date...."
          placeholderTextColor="#DDDDDD"
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={showDatePicker}>
          <Image
            style={styles.Icon}
            source={require('../TopScreens/ftg.png')}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        textColor='#2155CD'
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon} 
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="search by invoice name..."
          placeholderTextColor="#DDDDDD"
        />
        <TouchableOpacity>
        <View style={styles.blueBox}>
          <Image
            style={styles.imgBox}
            source={require('../TopScreens/search.png')}
          />
        </View>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:16,fontWeight:'700',marginTop:24,marginLeft:16}}>Created</Text>
<ScrollView>
<View style={{backgroundColor:'#F2F2F2',width:352,height:165,borderRadius:'6',alignSelf:'center',marginTop:8}}>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>#Invoice</Text>
<Text style={{color:'#888888',marginLeft:25}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>10</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Recepient</Text>
<Text style={{color:'#888888',marginLeft:16}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Lorem Ipsum is simply dummy text.</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Bill Date</Text>
<Text style={{color:'#888888',marginLeft:28}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Jul 19, 2023</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Amount</Text>
<Text style={{color:'#888888',marginLeft:32}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>$ 0.00</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Action</Text>
<Text style={{color:'#888888',marginLeft:42}}>:</Text>
<View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
  <TouchableOpacity>
  <Image style={{height: 15, width: 15, marginRight: 10}} source={require('../TopScreens/feather.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/write.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/copy.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 11, width: 17, marginRight: 10}} source={require('../TopScreens/eye.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 14, width: 11}} source={require('../TopScreens/frew.png')} />
  </TouchableOpacity>
</View>

</View>

</View>


<View style={{backgroundColor:'#F2F2F2',width:352,height:165,borderRadius:'6',alignSelf:'center',marginTop:8}}>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>#Invoice</Text>
<Text style={{color:'#888888',marginLeft:25}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>10</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Recepient</Text>
<Text style={{color:'#888888',marginLeft:16}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Lorem Ipsum is simply dummy text.</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Bill Date</Text>
<Text style={{color:'#888888',marginLeft:28}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Jul 19, 2023</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Amount</Text>
<Text style={{color:'#888888',marginLeft:32}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>$ 0.00</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Action</Text>
<Text style={{color:'#888888',marginLeft:42}}>:</Text>
<View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
  <TouchableOpacity>
  <Image style={{height: 15, width: 15, marginRight: 10}} source={require('../TopScreens/feather.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/write.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/copy.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 11, width: 17, marginRight: 10}} source={require('../TopScreens/eye.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 14, width: 11}} source={require('../TopScreens/frew.png')} />
  </TouchableOpacity>
</View>
</View>
</View>

<TouchableOpacity
  style={styles.button}
  onPress={() => setModalVisible(true)}
>
  <View style={{ flexDirection: 'row' }}>
    <Image
      style={styles.add2}
      source={require('../TopScreens/feather2.png')}
    />
    <Text style={styles.buttonText2}>SEND INVOICE</Text>
  </View>
</TouchableOpacity>
<Modal
  isVisible={isModalVisible}
  animationIn="fadeIn"
  animationOut="fadeOut"
  onBackdropPress={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <SendModal setLogoutModal={setModalVisible}/>
  </View>
</Modal>

      </ScrollView>
    </View>
  );
};
const SentScreen = () => {
  const [search, setSearch] = useState('');
  const [formattedDate, setFormattedDate] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const handleConfirm = (date) => {
    console.log('Selected date: ', date);
    const formattedDateStr = formatDate(date); 
    setFormattedDate(formattedDateStr); 
    setShipTo(date.toISOString().split('T')[0]);
    hideDatePicker();
  };
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  return (
    <View style={{backgroundColor:'white',flex:1}}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input2}
          value={formattedDate}
          editable={false}
          placeholder="search by date...."
          placeholderTextColor="#DDDDDD"
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={showDatePicker}>
          <Image
            style={styles.Icon}
            source={require('../TopScreens/ftg.png')}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        textColor='#2155CD'
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputWithIcon} 
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="search by invoice name..."
          placeholderTextColor="#DDDDDD"
        />
        <TouchableOpacity>
        <View style={styles.blueBox}>
          <Image
            style={styles.imgBox}
            source={require('../TopScreens/search.png')}
          />
        </View>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:16,fontWeight:'700',marginTop:24,marginLeft:16}}>Sent</Text>
<ScrollView>
<View style={{backgroundColor:'#F2F2F2',width:352,height:165,borderRadius:'6',alignSelf:'center',marginTop:8}}>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>#Invoice</Text>
<Text style={{color:'#888888',marginLeft:25}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>10</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Recepient</Text>
<Text style={{color:'#888888',marginLeft:16}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Lorem Ipsum is simply dummy text.</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Bill Date</Text>
<Text style={{color:'#888888',marginLeft:28}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Jul 19, 2023</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Amount</Text>
<Text style={{color:'#888888',marginLeft:32}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>$ 0.00</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Action</Text>
<Text style={{color:'#888888',marginLeft:42}}>:</Text>
<View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
  <TouchableOpacity>
  <Image style={{height: 15, width: 15, marginRight: 10}} source={require('../TopScreens/feather.png')} />
  </TouchableOpacity>
  {/* <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/write.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/copy.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 11, width: 17, marginRight: 10}} source={require('../TopScreens/eye.png')} />
  </TouchableOpacity> */}
  <TouchableOpacity>
  <Image style={{height: 14, width: 11}} source={require('../TopScreens/frew.png')} />
  </TouchableOpacity>
</View>

</View>

</View>


<View style={{backgroundColor:'#F2F2F2',width:352,height:165,borderRadius:'6',alignSelf:'center',marginTop:8}}>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>#Invoice</Text>
<Text style={{color:'#888888',marginLeft:25}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>10</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Recepient</Text>
<Text style={{color:'#888888',marginLeft:16}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Lorem Ipsum is simply dummy text.</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Bill Date</Text>
<Text style={{color:'#888888',marginLeft:28}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>Jul 19, 2023</Text>
</View>

<View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Amount</Text>
<Text style={{color:'#888888',marginLeft:32}}>:</Text>
<Text style={{color:'#888888',marginLeft:16}}>$ 0.00</Text>
</View>

<View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
<Text style={{color:'#888888'}}>Action</Text>
<Text style={{color:'#888888',marginLeft:42}}>:</Text>
<View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
  <TouchableOpacity>
  <Image style={{height: 15, width: 15, marginRight: 10}} source={require('../TopScreens/feather.png')} />
  </TouchableOpacity>
  {/* <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/write.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/copy.png')} />
  </TouchableOpacity>
  <TouchableOpacity>
  <Image style={{height: 11, width: 17, marginRight: 10}} source={require('../TopScreens/eye.png')} />
  </TouchableOpacity> */}
  <TouchableOpacity>
  <Image style={{height: 14, width: 11}} source={require('../TopScreens/frew.png')} />
  </TouchableOpacity>
</View>

</View>

</View>
<TouchableOpacity
  style={styles.button}
  onPress={() => setModalVisible(true)}
>
  <View style={{ flexDirection: 'row' }}>
    <Image
      style={styles.add2}
      source={require('../TopScreens/feather2.png')}
    />
    <Text style={styles.buttonText2}>SEND INVOICE</Text>
  </View>
</TouchableOpacity>
<Modal
  isVisible={isModalVisible}
  animationIn="fadeIn"
  animationOut="fadeOut"
  onBackdropPress={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    {/* <SendModal /> */}
    <SendModal setLogoutModal={setModalVisible}/>

  </View>
</Modal>
      </ScrollView>
    </View>
  );
};
const TrashScreen = () => {
    const [search, setSearch] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    const [shipTo, setShipTo] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
    const handleConfirm = (date) => {
      console.log('Selected date: ', date);
      const formattedDateStr = formatDate(date); 
      setFormattedDate(formattedDateStr); 
      setShipTo(date.toISOString().split('T')[0]);
      hideDatePicker();
    };
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    };
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input2}
            value={formattedDate}
            editable={false}
            placeholder="search by date...."
            placeholderTextColor="#DDDDDD"
          />
          <TouchableOpacity style={styles.passwordToggle} onPress={showDatePicker}>
            <Image
              style={styles.Icon}
              source={require('../TopScreens/ftg.png')}
            />
          </TouchableOpacity>
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          textColor='#2155CD'
        />
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputWithIcon} 
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="search by invoice name..."
            placeholderTextColor="#DDDDDD"
          />
          <TouchableOpacity>
          <View style={styles.blueBox}>
            <Image
              style={styles.imgBox}
              source={require('../TopScreens/search.png')}
            />
          </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:16,fontWeight:'700',marginTop:24,marginLeft:16}}>Trash</Text>
        <ScrollView>
  <View style={{backgroundColor:'#F2F2F2',width:352,height:165,borderRadius:'6',alignSelf:'center',marginTop:8}}>
  
  <View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
  <Text style={{color:'#888888'}}>#Invoice</Text>
  <Text style={{color:'#888888',marginLeft:25}}>:</Text>
  <Text style={{color:'#888888',marginLeft:16}}>10</Text>
  </View>
  
  <View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
  <Text style={{color:'#888888'}}>Recepient</Text>
  <Text style={{color:'#888888',marginLeft:16}}>:</Text>
  <Text style={{color:'#888888',marginLeft:16}}>Lorem Ipsum is simply dummy text.</Text>
  </View>
  
  <View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
  <Text style={{color:'#888888'}}>Bill Date</Text>
  <Text style={{color:'#888888',marginLeft:28}}>:</Text>
  <Text style={{color:'#888888',marginLeft:16}}>Jul 19, 2023</Text>
  </View>
  
  <View style={{marginTop:16,flexDirection:'row',marginLeft:16}}>
  <Text style={{color:'#888888'}}>Amount</Text>
  <Text style={{color:'#888888',marginLeft:32}}>:</Text>
  <Text style={{color:'#888888',marginLeft:16}}>$ 0.00</Text>
  </View>
  
  <View style={{marginTop:12,flexDirection:'row',marginLeft:16}}>
  <Text style={{color:'#888888'}}>Action</Text>
  <Text style={{color:'#888888',marginLeft:42}}>:</Text>
  <View style={{flexDirection: 'row', marginLeft: 15, alignItems: 'center'}}>
    {/* <TouchableOpacity>
    <Image style={{height: 15, width: 15, marginRight: 10}} source={require('../TopScreens/feather.png')} />
    </TouchableOpacity> */}
    <TouchableOpacity>
    <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/time.png')} />
    </TouchableOpacity>
     {/* <TouchableOpacity>
    <Image style={{height: 16, width: 16, marginRight: 10}} source={require('../TopScreens/copy.png')} />
    </TouchableOpacity>
    <TouchableOpacity>
    <Image style={{height: 11, width: 17, marginRight: 10}} source={require('../TopScreens/eye.png')} />
    </TouchableOpacity> */}
    <TouchableOpacity>
    <Image style={{height: 14, width: 11}} source={require('../TopScreens/frew.png')} />
    </TouchableOpacity> 
  </View>
  </View>
  </View>
  </ScrollView>
  </View>
  );
};
const Tab = createMaterialTopTabNavigator();
const TopNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Created"
        component={CreatedScreen}
        options={{
          tabBarLabel: () => (
            <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabelText, styles.activeTabLabel]}>
                Created
              </Text>
              { (
                <View style={styles.circularView}>
                <Text style={{color:'blue' ,fontSize:16,fontWeight:'600',alignSelf:'center',marginTop:5}}>2</Text>
                 </View> 
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Sent"
        component={SentScreen}
        options={{
          tabBarLabel: () => (
            <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabelText, styles.activeTabLabel]}>
                Sent
              </Text>
              { (
                <View style={styles.circularView}>
                <Text style={{color:'blue' ,fontSize:16,fontWeight:'600',alignSelf:'center',marginTop:5}}>2</Text>
                 </View> 
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Trash"
        component={TrashScreen}
        options={{
          tabBarLabel: () => (
            <View style={styles.tabLabelContainer}>
              <Text style={[styles.tabLabelText,styles.activeTabLabel]}>
                Trash
              </Text>
              {(
                <View style={styles.circularView}>
                <Text style={{color:'blue' ,fontSize:16,fontWeight:'600',alignSelf:'center',marginTop:5}}>1</Text>
                 </View> 
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  
  add2: {
    height: 16,
    width: 16,
    top:2,
    right:9
  },
  button: {
    backgroundColor: '#2155CD',
    width: 353,
    height: 48,
    borderRadius: 6,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:18,
    marginBottom:30
  },

  buttonText2: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabLabelText: {
    marginRight: 8,
  },
  activeTabLabel: {
    color: '#2155CD',
    fontWeight: 'bold',
  },
  circularView: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: '#2155CD0D',
  },
  Icon: {
    resizeMode: 'contain',
    height: 18,
    width:20,
    right: 17,
  },
  passwordToggle: {
    right: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  input: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: '#2155CD',
    padding: 10,
    borderRadius: 6,
  },
  input2: {
    height: 48,
    // flex: 1,
    width:352,
    borderWidth: 1,
    borderColor: '#2155CD',
    padding: 10,
    borderRadius: 6,
  },
  inputWithIcon: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: '#2155CD',
    padding: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,

  },
  blueBox: {
    backgroundColor: '#2155CD',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    height: 48,
    width: 48,
  },
  imgBox: {
    height: 16,
    width: 16,
    tintColor: 'white',
    alignSelf:'center',
    marginTop:14,
    marginRight:3
  },
});
export default TopNavigation;
