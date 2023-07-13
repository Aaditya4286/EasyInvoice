import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ss.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Easy Invoice</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: "row"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    bottom: 15
  },
});

export default Splash;
