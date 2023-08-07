import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import LottieView from "lottie-react-native";
import Swiper from 'react-native-swiper';

const Intro = ({ navigation }) => {
  const swiperRef = useRef(null);

  const handleSkip = () => {
    navigation.navigate('Login');
  };

  const handleButtonPress = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1); // Scroll to the next slide
    }
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        showsButtons={false}
        paginationStyle={{
          top: '80%',
        }}
      >
        <View>
          <Image style={styles.image2} source={require('../assets/Path88.png')} />
          <Image style={styles.image} source={require('../assets/xyz.png')} />
          <Text style={[styles.text, {paddingTop:5,margin:2}]}>Start With Free Online Invoice Generator</Text>
        </View>
        <View>
          <Image style={styles.image2} source={require('../assets/Path8.png')} />
          <LottieView
            style={{
              height: 300,
              backgroundColor: 'green',
              alignSelf: 'center',
            }}
            source={require('../assets/invoice.json')}
            autoPlay
            loop
          />
          <Text style={styles.text}>Online Invoice Generator Create & download invoices for free</Text>
        </View>
      </Swiper>
      <View style={styles.rowContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.text2}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
          <Image style={styles.image3} source={require('../assets/8491.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 294,
    height: 294,
    marginHorizontal: 40,
  },
  image2: {
    width: 374,
    height: 152,
  },
  image3: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    top: 34,
    textAlign: 'center',
    marginTop: 10,
  },
  text2: {
    fontSize: 20,
    color: 'grey',
    marginBottom: 25,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    paddingRight: 1,
  },
});

export default Intro;
