import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const SendModal = () => {
    const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [invoice, setInvoice] = useState('')
  const [notes, setNotes] = useState('')
  return (
    <View>
      <Text style={{fontSize:24,fontWeight:'bold',textAlign:'center',marginTop:32}}>Send Invoices</Text>
   <Text style={{color:'#888888',textAlign:'center',marginTop:8}}>Send a invoice like a purchase order or invoice to businesses in your network.</Text>
    
   <View style={styles.inputContainer}>
    <Text style={styles.label}>SUBJECT</Text>
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={text => setSubject(text)}
        placeholder="What is the Subject?"
      />
    </View>
  </View>
  <View style={styles.inputContainer}>
        <Text style={styles.label}>EMAIL ADDRESS</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Who is the recipient?"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>INVOICE</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={invoice}
            onChangeText={text => setInvoice(text)}
            placeholder="select"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOTES</Text>
        <View style={styles.passwordContainer}>
        <TextInput
            style={[styles.input, { height: 67 }]} 
            value={notes}
            onChangeText={(text) => setNotes(text)}
            placeholder="Any Specific Custom Notes..."
            multiline={true} 
          />
        </View>
      </View>
    
<Text style={{color:'#2155CD',fontSize:12,marginHorizontal:18,marginLeft:22,marginTop:12}}>Invoices must be formatted using UBL (Universal Business Language). If you need a tool to help you generate UBL invoices try easyinvoice.com</Text>


<View style={{flexDirection:'row',justifyContent:'flex-end',marginRight:16}}>
      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.signupButton}>
          <Text style={styles.signupText1}>CANCEL</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText2}>SEND</Text>
      </TouchableOpacity>
      </View>


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
    buttonText2: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
    signupText1: {
        color: '#888888',
        top: 15,
        fontWeight: 'bold',
        fontSize: 16
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
        // borderWidth: 1,
        borderColor: '#2155CD',
        marginHorizontal: 16,
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
        width: 300,
        // marginRight:15
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
export default SendModal