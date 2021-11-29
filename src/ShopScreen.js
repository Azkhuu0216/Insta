import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';

import {FlatList, ScrollView} from 'react-native-gesture-handler';
import MyInput from '../component/MyInput';
import Tab from '../component/Shop/Tab';
let shops = require('../shoplist.json');
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');

export function ShopScreen() {
  const renderItem = ({item, index}) => {
    return (
      <View style={{margin: 2}}>
        <Image
          source={{uri: item.product}}
          style={{
            height: screenHeight / 6,
            width: screenWidth / 3,
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={css.container}>
      <Tab name1="favorite" name2="menu" />
      <View style={css.MyInput}>
        <MyInput placeholder="shop" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={css.ScrollView}>
        <View style={css.View}>
          <TouchableOpacity style={css.Touch}>
            <Text style={css.Text}>Shops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.Touch}>
            <Text style={css.Text}>Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.Touch}>
            <Text style={css.Text}>Editor's Pickers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.Touch}>
            <Text style={css.Text}>Collections</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.Touch}>
            <Text style={css.Text}>Guides</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <FlatList
        horizontal={false}
        numColumns={3}
        data={shops}
        renderItem={renderItem}
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
    flexDirection: 'row',
    marginBottom: 15,
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  MyInput: {
    marginVertical: 10,
  },
  Touch: {
    marginHorizontal: 3,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderColor: 'gray',
    height: 30,
  },
});
