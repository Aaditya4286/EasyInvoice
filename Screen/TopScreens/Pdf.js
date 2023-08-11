import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Pdf = () => {
  return (
    <View>
    <View style={{borderWidth:1,borderColor:'#DDDDDD',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:70}}>  
      <Text style={{fontSize:16,fontWeight:'600',marginLeft:16}}>What file format do you want?</Text>
      <TouchableOpacity>
      <Image style={{height:14,width:14,marginRight:16}} 
             source={require("../TopScreens/cross.png")} />
   </TouchableOpacity>
    </View>
    <TouchableOpacity>
    <View style={{borderWidth:1,borderColor:'#DDDDDD',height:94,width:147,alignSelf:'center',marginVertical:16}}>
    <View style={{alignSelf:'center',marginTop:15}}>
    <Image style= {{height:15,width:15,marginLeft:55}}
    source={require("../TopScreens/sawt.png")} />
    <Text style={{fontWeight:'600',color:'#2155CD',marginLeft:51,marginTop:5}}>PDF</Text>
    <Text style={{fontWeight:'600',color:'#2155CD',marginLeft:10}}>(Recommended)</Text>
    </View>
    </View>
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={{borderWidth:1,borderColor:'#DDDDDD',height:94,width:147,alignSelf:'center',marginTop:23}}>
    <View style={{alignSelf:'center',marginTop:26}}>
    <Image style= {{height:15,width:15,marginLeft:23}}
    source={require("../TopScreens/sawt.png")} />
    <Text style={{fontWeight:'600',color:'#2155CD',marginTop:5}}>E-Invoice</Text>
    </View>
    </View>
    </TouchableOpacity>
    </View>
  )
}

export default Pdf