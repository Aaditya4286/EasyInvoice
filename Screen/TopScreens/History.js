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
const History = ({navigation}) => {
  const [search, setSearch] = useState('');
  return ( 
        <View style={{ flex: 1 ,backgroundColor:'white'}}>
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
              source={require('../TopScreens/mode.png')}
            />
          </TouchableOpacity>
          <Text style={styles.text}>History</Text>
        </View>
        <ScrollView>
          <Text style={{fontWeight:'500',color:'#000000',marginTop:32,marginHorizontal:16}}>We automatically save invoices that you created recently to your device. This is useful when you need to quickly make an edit to an invoice.</Text>
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
<View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:16}}>
      <TouchableOpacity style={styles.buttonContainer} onPress={()=>navigation.navigate("Pdf")}>
        <View style={styles.signupButton}>
          <View style={{flexDirection: 'row'}}>
        <Image
                style={styles.add}
                source={require('../TopScreens/sawt.png')}
              />
          <Text style={styles.signupText1}>EXPORT</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>NEW INVOICE</Text>
      </TouchableOpacity>
      </View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginLeft:16,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>


<View style={{marginRight:16,borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginLeft:16,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>


<View style={{marginRight:16,borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>

<View style={{borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginLeft:16,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>


<View style={{marginRight:16,borderWidth: 1,borderColor: '#DDDDDD',width: 163,height: 106,borderRadius: 6,marginTop:24}}>
<View style={{flexDirection:'row',marginTop:10,justifyContent:'space-evenly'}}>
<Text style={{color:'#2155CD',fontSize:12,marginRight:20}}>DRAFT</Text>
<TouchableOpacity>
<Image style={{height:15,width:15,marginLeft:20}} source={require('../TopScreens/sawt.png')} />
</TouchableOpacity>
<TouchableOpacity>
<Image style={{height:15,width:12,}} source={require('../TopScreens/frew.png')} />
</TouchableOpacity>
</View>
<View style={{alignSelf:'center',marginTop:16}}>
<Text style={{fontSize:12,marginLeft:15}}>dfgdfg</Text>
<Text style={{fontSize:12,marginTop:4}}>Jul 05, 2023</Text>
</View>
</View>

</View>
<View style={{flexDirection:'row'}}>
<Image style={{height:13,width:14,marginTop:20,marginLeft:16}} source={require("../TopScreens/stop.png")} />
<Text style={{color:'#E50909',fontSize:12,marginTop:20,marginLeft:5}}>If you did not use the Send Invoice option then these invoices</Text>
</View>
<Text style={{color:'#E50909',fontSize:12,marginHorizontal:16}}>are stored on your device only. Clearing your browser's history will erase these invoices. If you use the Download Invoice option then we recommend hanging on to a copy of each invoice you generate.</Text>

<TouchableOpacity style={styles.button3}>
        <Text style={styles.buttonText2}>ERASE EVERYTHING</Text>
      </TouchableOpacity>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
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
  button3: {
    backgroundColor: '#E50909',
    width: 343,
    height: 48,
    borderRadius: 6,
    marginTop: 14,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft:23,
    marginBottom:20
  },
  buttonText2: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText1: {
    color: '#2155CD',
    top: 15,
    fontWeight: 'bold',
    fontSize: 16
  },
  add: {
    height: 16,
    width: 16,
    top:15,
    right:9
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
    borderWidth: 1,
    borderColor: '#2155CD',
    marginHorizontal: 16,
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
  inputWithIcon: {
    height: 48,
    flex: 1,
    borderWidth: 1,
    borderColor: '#2155CD',
    padding: 10,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,

  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
    text: {
      marginTop: 20,
      color: 'white',
      marginLeft: 16,
      fontWeight: 'bold',
      fontSize: 24,
    },
  })
export default History  