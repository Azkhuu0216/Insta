import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfileScreen} from '.';
import MyTabs from '../component/TAb/Profile';

const ProScreen = () => {
  return (
    <>
      <ProfileScreen />
      <View style={{marginVertical: 80}}></View>
      <MyTabs />
    </>
  );
};

export default ProScreen;

const styles = StyleSheet.create({});
