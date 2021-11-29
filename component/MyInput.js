import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export const MyInput = ({placeholder}) => {
  return (
    <View>
      <TextInput placeholder={placeholder} style={styles.MyInput} />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  MyInput: {
    height: 30,
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 5,
    borderColor: '#758283',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
});
