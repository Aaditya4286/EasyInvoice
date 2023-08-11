import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const LogoutModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>Are you sure you want to log out?</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 50, marginTop: 20 }}>
            <TouchableOpacity style={styles.buttonContainer} onPress={onCancel}>
              <View style={styles.signupButton}>
                <Text style={styles.signupText1}>NO</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.buttonText2}>YES</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: 300,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2155CD',
    width: 130,
    height: 48,
    borderRadius: 6,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3,
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
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 24,
    alignItems: 'center',
    bottom: 10,
  },
  signupButton: {
    width: 130,
    height: 48,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    borderColor: '#2155CD',
    marginHorizontal: 16,
  },
});

export default LogoutModal;
