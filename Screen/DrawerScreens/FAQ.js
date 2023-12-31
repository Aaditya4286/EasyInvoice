import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const data = [
  {
    id: "1",
    name: "Fastest way to get paid?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "tool there is an option that you can add your company logo, select colors that represent your brand, and customize the layout and font styles to create a cohesive and visually appealing invoice.",
  },
  {
    id: "2",
    name: "What is an online invoice generator tool?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "Easy Invoice is an online web application. It is very useful for business and individual people to create professional invoices very quickly and easily. It completely removes the manual invoicing because it's time consuming. So Easy Invoice provides the pre-designed templates and also provides automatic functionality of adding item details, calculating total, add discount and taxes and then download or mail the online generated invoice in pdf format or have a printable option.",
  },
  {
    id: "3",
    name: "How does an online invoice generator tool work?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "Easy Invoice is an online invoice generator tool, it has the best user-friendly interface. So the process to generate an online invoice is first login the application, then update the relevant information like client details, product items, rates, discount, taxes. After that the application processes all calculations and info. Then you can download the invoice in the selected invoice template.",
  },
  {
    id: "4",
    name: "Are online invoice generator tools secure?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "ezinvoicegenerator.com main aim is to focus on data security and protect or secure user data. Using (HTTPS) secure connections and using data encryption to protect your information.",
  },
  {
    id: "5",
    name: "Can I customize the invoices generated by an online invoice generator tool?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "In Online bill makers you can easily customise your invoice. In easy invoice the customisation is possible at certain levels like change business logo, fonts, colour and some info you have to mention.",
  },
  {
    id: "6",
    name: "Are online invoice generator tools free?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "In the free version you get the limited features to create bills. So to get advanced features or get customized applications as per your business requirement you have to apply for premium paid plans. Our developer can develop the invoice as per your requirement.",
  },
  {
    id: "7",
    name: "Can I generate an invoice in PDF format?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "Yes, In this online billing software you can download the invoice in pdf format and also have the mail facility to your customer.",
  },
  {
    id: "8",
    name: "Is it possible to generate invoices in languages other than English as well?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "Yes, in an easy invoice you can choose multiple languages to create online bills but there are some limited languages. So if you need to add some other language, then just connect with us for customization.",
  },
  {
    id: "9",
    name: "Is it possible to modify the currency?",
    image: require("../DrawerScreens/minus.png"),
    value:
      "Yes, of course you can change the currency. By Default there you get one currency but if you want to change the currency then select the option “Currency Symbol” at top-right side from there you can change.",
  },
];
const FAQ = ({navigation}) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (id) => {
    setExpandedItems((prevExpandedItems) =>
      prevExpandedItems.includes(id)
        ? prevExpandedItems.filter((item) => item !== id)
        : [...prevExpandedItems, id]
    );
  };

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
        <Text style={styles.text}>FAQ</Text>
      </View>
      <ScrollView style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
        <View>
          {data.map((item) => {
            const isExpanded = expandedItems.includes(item.id);
            return (
              <View key={item.id} style={styles.itemContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 12,
                  }}
                >
                  <Text style={styles.itemText}>{item.name}</Text>
                  <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                    <Image
                      style={styles.itemImage}
                      source={
                        isExpanded
                          ? require('../DrawerScreens/minus.png')
                          : require('../DrawerScreens/plus.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                {isExpanded && (
                  <Text style={styles.itemText2}>{item.value}</Text>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: "white",
    marginLeft:16,
    fontWeight: "bold",
    fontSize:24
  },
  itemImage: {
    // marginRight: 2,
    marginTop: 24,
    width: 18,
    height: 18,
    alignSelf:'flex-end'
  },
  itemContainer: {
    marginTop:22,
    backgroundColor:'white',
    width:343,
    alignSelf:'center',
    marginBottom:24 ,
    shadowColor: '#00000033',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    borderRadius:6
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    // marginLeft:12
  },
  itemText2: {
    fontSize: 14,
    marginTop: 16,
    color: '#888888',
    marginLeft:12,
    marginBottom:12
  },
})
export default FAQ