import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import MyInput from '../component/MyInput';
import {FlatList} from 'react-native-gesture-handler';

import renderImages from '../component/Search/RenderImages';
let users = require('../userlist.json');
export function SearchScreen() {
  return (
    <SafeAreaView style={css.container}>
      <View style={css.View}>
        <MyInput placeholder="Search" />
      </View>

      <FlatList
        horizontal={false}
        numColumns={3}
        data={users}
        renderItem={renderImages}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  View: {
    marginBottom: 10,
    marginStart: 5,
  },
});
