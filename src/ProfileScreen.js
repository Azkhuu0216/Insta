import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import Data from '../component/Profile/Data';
import Tab from '../component/Profile/Tab';
import Post from '../component/Profile/Post';

let users = require('../userlist.json');
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export function ProfileScreen() {
  const Item = ({uri, name, FullName, button, touch}) => (
    <View style={css.item}>
      <TouchableOpacity>
        <Text style={css.touch}>{touch}</Text>
      </TouchableOpacity>
      <Image source={uri} style={css.FlatImage} />
      <Text style={css.txt}>{name}</Text>
      <Text style={css.txt1}>{FullName}</Text>
      <TouchableOpacity style={css.TouchableOpacity}>
        <Text style={css.btn}> {button} </Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({item}) => (
    <Item
      uri={item.uri}
      name={item.name}
      FullName={item.FullName}
      button={item.button}
      touch={item.touch}
    />
  );
  const renderImages = ({item, index}) => {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={{
            height: screenHeight / 6,
            width: screenWidth / 3,
          }}
          key={index}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={css.container}>
      <Tab name1="diff-added" name2="menu" />
      <Post />
      <View style={css.View3}>
        <TouchableOpacity style={css.Touch}>
          <Text style={css.Edit}> Edit Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={css.SmallTouch}>
          <Text style={css.Edit}> ^ </Text>
        </TouchableOpacity>
      </View>
      <View style={css.View4}>
        <Text style={css.Dis}>Discover People</Text>
        <TouchableOpacity>
          <Text style={css.see}> See All </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    </SafeAreaView>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
  },

  View3: {
    flexDirection: 'row',
  },

  Touch: {
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    marginLeft: 8,
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    borderColor: 'gray',
    paddingHorizontal: 125,
  },
  SmallTouch: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 8,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  Edit: {
    fontWeight: '600',
  },
  Edit1: {
    fontWeight: '600',
    color: 'gray',
  },
  Dis: {
    fontWeight: '600',
    marginLeft: 8,
  },
  View4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  see: {
    color: '#007AFF',
    fontWeight: '500',
  },
  item: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 2,
    borderRadius: 5,
    borderColor: 'gray',
  },
  txt: {
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '700',
  },
  txt1: {
    fontSize: 13,
    textAlign: 'center',
  },
  FlatImage: {
    width: 85,
    height: 85,
    borderRadius: 100,
  },
  touch: {
    color: 'gray',
    textAlign: 'right',
    fontSize: 20,
  },
  TouchableOpacity: {
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
    borderRadius: 5,
    marginVertical: 8,
    alignItems: 'center',
  },
  btn: {
    color: 'white',
    fontWeight: '600',
  },
  ScrollView: {
    horizontal: true,
  },
});
