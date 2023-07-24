import React, { useState } from 'react';
import {
  View,                                                                                                   
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


const CreateInvoice = () => {
  const handleSelectFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        console.log('Selected image:', result.uri);
      }                                                                         
    } catch (error) {
      console.log('Image selection error:', error);
    }
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [invoiceFrom, setInvoiceFrom] = useState('');
  const [invoiceTo, setInvoiceTo] = useState('');
  const [shipTo, setShipTo] = useState('');
  const [arrowValue, setArrowValue] = useState('1');
  const [formattedDate, setFormattedDate] = useState('');
  const [isDueDatePickerVisible, setDueDatePickerVisibility] = useState(false);
  const [dueDate, setDueDate] = useState('');
  const [formattedDueDate, setFormattedDueDate] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [ponumber, setPoNumber] = useState('');
  const [name, setName] = useState('');
  const [rate, setRate] = useState('');
  const [amount, setAmount] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [tax, setTax] = useState('');
  const [refresh, setrefresh] = useState(true);
  const [refreshDiscount, setrefreshDiscount] = useState(true)
  const [showDiscount, setShowDiscount] = useState(false);
  const [showShipping, setShowShipping] = useState(false);
  const [shippingAmount, setShippingAmount] = useState('');
  const [notes, setNotes] = useState('');
  const [terms, setTerms] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [selectedThemeColor, setSelectedThemeColor] = useState('');
  const [selectedTextColor, setSelectedTextColor] = useState('');
  const [selectedSymbolColor, setSelectedSymbolColor] = useState('');



  const handleAddDiscount = () => {
    setShowDiscount(true);
  };
  
  const handleAddShipping = () => {
    setShowShipping(true);
  };
  
  const hideShippingInput = () => {
    setShippingAmount('');
    setShowShipping(false);
  };
  
  const data = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
  ];

  const quantityData = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];

  const currencyData = [
    { label: 'USD $', value: 'USD' },
    { label: 'EUR €', value: 'EUR' },
    { label: 'GBP £', value: 'GBP' },
    { label: 'JPY ¥', value: 'JPY' },
    { label: 'CAD $', value: 'CAD' },
  ];
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const colors = [
    'black',
    'grey',
    'powderblue',
    'blue',
    'yellow',
    'red',
  ];

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log('Selected date: ', date);
    const formattedDateStr = formatDate(date); 
    setFormattedDate(formattedDateStr); 
    setShipTo(date.toISOString().split('T')[0]);
    hideDatePicker();
  };
  const showDueDatePicker = () => {
    setDueDatePickerVisibility(true);
  };

  const hideDueDatePicker = () => {
    setDueDatePickerVisibility(false);
  };

  const handleDueDateConfirm = (date) => {
    console.log('Selected due date: ', date);
    const formattedDueDateStr = formatDate(date); 
    setFormattedDueDate(formattedDueDateStr); 
    setDueDate(date.toISOString().split('T')[0]);
    hideDueDatePicker();
  };
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const taxBtn = () => {
    setrefresh(!refresh);
  };
  const discountBtn = () => {
    setrefreshDiscount(!refreshDiscount);
  };


  
  const renderDiscountInputBox = () => {
    if (showDiscount) {
      return (
        <View>
          <Text style={styles.label}>Discount</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            {refreshDiscount ? <Text style={{ left: 10 }}>$</Text> : null}
            <TextInput
              style={[styles.dashedTextInput, { alignSelf: "center", paddingLeft: 240 }]}
              placeholderTextColor="#000000"
              keyboardType="numeric"
            ></TextInput>
            {refreshDiscount ? null :
              <Text style={{ right: 15, paddingLeft: 12 }}>%</Text>}
            <TouchableOpacity onPress={discountBtn}>
              <Image
                style={{ height: 16, width: 16, right: 9 }}
                source={require('../TabScreens/refresh.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return null;
  };
  const renderShippingInputBox = () => {
    if (showShipping) {
      return (
        <View>
          <Text style={styles.label}>Shipping</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <Text style={{ left: 10 }}>$</Text>
            <TextInput
               style={[styles.dashedTextInput, { textAlign: 'right' }]}
              placeholder="0.00"
              placeholderTextColor="#000000"
              value={shippingAmount}
              onChangeText={(amount) => setShippingAmount(amount)}
              keyboardType="numeric"
            />
          </View>
        </View>
      );
    }
    return null;
  };
  return (
    <View style={{ flex: 1,backgroundColor:"white"}}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>CREATE INVOICE</Text>
        </View>
        <TouchableOpacity>
          <Image style={styles.headerImage} source={require("../TabScreens/Square.png")} />
        </TouchableOpacity>
      </View>

      <ScrollView style={{paddingBottom:200}}>
        <View style={styles.container}>
          <View style={[styles.dottedLineBox, { height: 66 }, { marginTop: 32 }]}>
            <View style={styles.imageContainer}>
              <Image style={styles.logoImage} source={require("../TabScreens/gal.png")} />
            </View>
            <Text style={styles.dottedLineText}>
              Drag your logo here or{"\n"}
              <Text style={styles.selectFileButton} onPress={handleSelectFile}>
                Select a file
              </Text>
            </Text>
          </View>

          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 20 }]}>
            <TextInput
              style={styles.dashedTextInput}
              placeholder="Who is this invoice from?"
              placeholderTextColor="#000000"
              value={invoiceFrom}
              onChangeText={(v) => setInvoiceFrom(v)}
            />
            {!invoiceFrom && <Text style={styles.sign}>*</Text>}
          </View>

          <Text style={styles.label}>BILL TO</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <TextInput
              style={styles.dashedTextInput}
              placeholder="Who is this invoice to?"
              placeholderTextColor="#000000"
              value={invoiceTo}
              onChangeText={(k) => setInvoiceTo(k)}
            />
            {!invoiceTo && <Text style={styles.sign}>*</Text>}
          </View>

          <Text style={styles.label}>SHIP TO</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <TextInput
              style={styles.dashedTextInput}
              placeholder="Optional"
              placeholderTextColor="#000000"
              value={shipTo}
              onChangeText={(s) => setShipTo(s)}
            />
          </View>

          <Text style={styles.input}>INVOICE</Text>
          <Text style={styles.input1}>INVOICE ID</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <View style={styles.dropdownContainer}>
              <View style={styles.squareView}>
                <Text style={styles.squareText}>#</Text>
              </View>
              <Dropdown
                style={styles.dropdown}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="1"
                value={arrowValue}
                dropdownPosition='top'
                onChange={(item) => {
                  setArrowValue(item.value);
                }}
              />
            </View>
          </View>
          <Text style={styles.input1}>DATE</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
          <TextInput
          style={styles.dashedTextInput}
          value={formattedDate}
          editable={false} 
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={showDatePicker}>
          <Image
            style={styles.Icon}
            source={require('../TabScreens/calendar.png')}
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


<Text style={styles.input1}>DUE DATE</Text>
      <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
        <TextInput
          style={styles.dashedTextInput}
          value={formattedDueDate}
          editable={false} 
        />
        <TouchableOpacity style={styles.passwordToggle} onPress={showDueDatePicker}>
          <Image
            style={styles.Icon}
            source={require('../TabScreens/calendar.png')}
          />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDueDatePickerVisible}
        mode="date"
        date={new Date(dueDate)} 
        onConfirm={handleDueDateConfirm}
        onCancel={hideDueDatePicker}
        textColor='#2155CD'
      />
<Text style={styles.label}>PAYMENT MODE</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <TextInput
              style={styles.dashedTextInput}
              placeholder="UPI/CREDIT OR DEBIT CARD"
              placeholderTextColor="#000000"
              value={paymentMode}
              onChangeText={(l) => setPaymentMode(l)}
            />
          </View>

          <Text style={styles.label}>PO NUMBER</Text>
          <View style={[styles.dottedLineBox, { height: 48 },{ marginTop: 6 }]}>
            <TextInput
              style={styles.dashedTextInput}
              placeholder="PONUM123456"
              placeholderTextColor="#000000"
              value={ponumber}
              onChangeText={(Q) => setPoNumber(Q)}
            />
          </View>
          <View style={styles.itemRow}>
            <Text style={styles.label}>ITEM</Text>
            <TouchableOpacity>
              <Image
                style={styles.delete}
                source={require('../TabScreens/del.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            marginTop: 10,
          }}>
            <TextInput
              style={{
                paddingHorizontal: 15,
                height: 48,
                borderRadius: 6,
                backgroundColor: 'white',
                elevation: 5,
                flex: 1,
                shadowColor: "black",
                shadowOpacity:0.2,
                shadowRadius:10
              }}
              value={name}
              onChangeText={text => setName(text)}
              placeholder="Description of service or product..."
            />
          </View>

          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
            <View style={{hadowColor: "black",shadowOpacity:0.2,shadowRadius:10}}>
            <Text style={{fontSize:12,fontWeight:"bold",marginLeft:16,}}>QTY</Text>
            <Dropdown
                style={{height:48,width:106,backgroundColor:"white",marginTop:6,paddingLeft:14,borderRadius: 6,}}
                data={quantityData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="1"
                value={arrowValue}
                dropdownPosition='top'
                onChange={(item) => {
                  setArrowValue(item.value);
                }}
              />
            </View>
            <View style={{hadowColor: "black",shadowOpacity:0.2,shadowRadius:10}}>
          <Text style={{fontSize:12,fontWeight:"bold",marginLeft:16}}>RATE</Text>
          <TextInput
                style={{height:48,width:106,backgroundColor:"white",marginTop:6,paddingLeft:14,borderRadius: 6}}
                placeholder="$ 00"
                placeholderTextColor="#000000"
                keyboardType="numeric"
                value={rate}
                onChangeText={t => setRate(t)}
              />
          </View>
          <View style={{hadowColor: "black",shadowOpacity:0.2,shadowRadius:10}}>
          <Text style={{fontSize:12,fontWeight:"bold",marginLeft:16}}>AMOUNT</Text>
          <Text
                style={{height:48,width:106,backgroundColor:"white",marginTop:6,paddingLeft:14,borderRadius: 6, alignSelf:"center",paddingTop:15}}
              >{rate*arrowValue}</Text>
          </View>
          </View>

          <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.signupButton}>
          <View style={{flexDirection: 'row'}}>
        <Image
                style={styles.add}
                source={require('../TabScreens/add.png')}
              />
          <Text style={styles.signupText}>Add New Invoice Item</Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.input}>Invoice Summary</Text>

      <Text style={styles.label}>SUBTOTAL</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <Text
              style={[styles.dashedTextInput,{paddingTop:15}]}
              value={subtotal}
              onChangeText={(u) => setSubtotal(u)}
            >{rate*arrowValue}</Text>
          </View>

          <Text style={styles.label}>TAX</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            {refresh?    
            <Text style={{left:10}}>$</Text>: null}
            
            <TextInput
              style={[styles.dashedTextInput,{alignSelf:"center",paddingLeft:240}]}
              placeholderTextColor="#000000"
              value={tax}
              onChangeText={(y) => setTax(y)}
              keyboardType="numeric"
            ></TextInput>
            {refresh?null:
            <Text style={{right:15,paddingLeft:12}}>%</Text>}
            <TouchableOpacity onPress={taxBtn}>
            <Image
                style={{height: 16, width: 16,right:9}}
                source={require('../TabScreens/refresh.png')}
              />
            </TouchableOpacity>
          </View>


          <View style={styles.buttonRow}>
      
      <TouchableOpacity onPress={() => setShowDiscount(!showDiscount)}>
        <Text style={styles.buttonText}>+ Discount</Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={handleAddShipping}>
        <Text style={styles.buttonText}>+ Shipping</Text>
      </TouchableOpacity>
    </View>

    {renderDiscountInputBox()}
    {renderShippingInputBox()}
      <View style={{flexDirection: 'row' ,justifyContent:'space-between'}}>
      <Text style={{fontWeight:'bold',fontSize: 12}}>TOTAL</Text>
      <Text style={{color:'blue'}}>$ 0.00</Text>
      </View>


      <Text style={styles.label}>AMOUNT PAID</Text>
          <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
            <Text
              style={[styles.dashedTextInput,{paddingTop:15}]}
              value={subtotal}
              onChangeText={(u) => setSubtotal(u)}
            >{rate*arrowValue}</Text>
          </View>

          <View style={{flexDirection: 'row' ,justifyContent:'space-between'}}>
      <Text style={{fontSize: 12, fontWeight:'bold'}}>BALANCE</Text>
      <Text>$ 0.00</Text>
      </View>

      

    
      <Text style={styles.label}>NOTES</Text>
      <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
        <TextInput
          style={styles.dashedTextInput}
          value={notes}
          onChangeText={(text) => setNotes(text)}
          multiline={true}
        />
      </View>

      
      <Text style={styles.label}>TERMS & CONDITION</Text>
      <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
        <TextInput
          style={styles.dashedTextInput}
          value={terms}
          onChangeText={(text) => setTerms(text)}
          multiline={true}
        />
      </View>
    
      <Text style={styles.label}>CURRENCY SYMBOL</Text>
      <View style={[styles.dottedLineBox, { height: 48 }, { marginTop: 6 }]}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.dropdown}
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


      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.signupButton}>
          <View style={{flexDirection: 'row'}}>
        <Image
                style={styles.add}
                source={require('../TabScreens/plane.png')}
              />
          <Text style={styles.signupText1}>SEND INVOICE</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
      <View style={{flexDirection: 'row'}}>
      <Image
                style={styles.add2}
                source={require('../TabScreens/download4.png')}
              />
        <Text style={styles.buttonText2}>DOWNLOAD INVOICE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <View style={styles.signupButton}>
          <View style={{flexDirection: 'row'}}>

          <Text style={styles.signupText1}>HISTORY</Text>
          </View>
        </View>
      </TouchableOpacity>

<Text style={styles.label}>THEME COLOR</Text>

<View style={styles.colorBox}>
  <View style={styles.colorRow}>
    {colors.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={{ width: 32, height: 32, backgroundColor: color }}
        onPress={() => setSelectedThemeColor(color)}
      />
    ))}
    <View style={{ width: 70, height: 32, backgroundColor: selectedThemeColor }} />
  </View>
</View>

<Text style={styles.label}>TEXT COLOR</Text>

<View style={styles.colorBox}>
  <View style={styles.colorRow}>
    {colors.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={{ width: 32, height: 32, backgroundColor: color }}
        onPress={() => setSelectedTextColor(color)}
      />
    ))}
    <View style={{ width: 70, height: 32, backgroundColor: selectedTextColor }} />
  </View>
</View>


<TouchableOpacity style={[styles.button, ]}>
        <Text style={[styles.buttonText,{color:"white"}]}>RESET COLOR</Text>
      </TouchableOpacity>


      

        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    borderColor:"grey",
    borderWidth:1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    elevation: 3,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#2155CD',
    width: 353,
    height: 48,
    borderRadius: 6,
    marginTop: 16,
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
    color: '#2155CD',
    top: 15,
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonText: {
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
    color: 'black'
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
  },
  add: {
    height: 16,
    width: 16,
    top:15,
    right:9
  },
  add2: {
    height: 16,
    width: 16,
    top:2,
    right:9
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  signupButton: {
    width: 353,
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
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  delete: {
    height:14 ,
    width:10,
    marginTop: 20,
    marginRight: 5
  },
  textInputBox: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    borderColor: "#888888",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    height: 48,
    borderRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
  },
  selectFileButton: {
    padding: 8,
    borderRadius: 4,
    textDecorationLine: "underline"
  },
  selectFileButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectFileButtonText: {
    marginLeft: 8,
    fontSize: 16,
  },
  passwordToggle: {
    position: 'absolute',
    right: 10,
  },
  Icon: {
    resizeMode: 'contain',
    height: 18,
    width:20,
    right: 7
  },
  header: {
    height: 106,
    backgroundColor: "#2155CD",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  headerText: {
    marginTop: 13,
    color: "white",
    marginLeft: 16,
    fontWeight: "bold",
  },
  headerImage: {
    width: 36,
    height: 36,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 20,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  dottedLineBox: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    borderColor: "#888888",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    marginRight: 8,
    justifyContent: "flex-start",
  },
  logoImage: {
    width: 20,
    height: 20,
    marginLeft: 16,
  },
  dottedLineText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#888888",
    marginLeft: 8,
    textAlign: "left",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  // dashedTextInput: {
  //   // marginLeft: 16,
  //   // justifyContent:"space-evenly"
  // },
  sign: {
    color: 'red',
  },
  label: {
    marginTop: 20,
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 21,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 32,
  },
  input1: {
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 28,
    marginTop: 16,
  },
  dropdownContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginLeft: -9,
  },
  dropdown: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 8,
    width: 106
  },
  squareView: {
    width: 48,
    height: 48,
    backgroundColor: '#DDDDDD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  squareText: {
    fontWeight: 'bold',
  },
  dashedTextInput:{
    flex:1,
    height:43,
    // width:100
  }
});

export default CreateInvoice;