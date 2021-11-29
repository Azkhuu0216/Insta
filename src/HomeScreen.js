import React, {useState} from 'react';

import {
  Button,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  View,
} from 'react-native';

import {AuthContext} from './untils';
import {ScrollView} from 'react-native-gesture-handler';

import Post from '../component/Home/Post';
import Tab from '../component/Home/TabContainer';
import Data from '../component/Home/images';

export function HomeScreen({navigation}) {
  const {signOut} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={css.container}>
      <Tab
        name1="diff-added"
        name2="heart-o"
        name3="send"
        onPress={() => navigation.navigate('Chat')}
      />
      <ScrollView>
        <FlatList
          contentContainerStyle={{marginStart: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={Data}
          renderItem={({item, index}) => (
            <Image source={item.uri} key={index} style={css.Images} />
          )}
          keyExtractor={item => item.key}
        />
        {Data.map(el => (
          <Post user={el.title} imgSRc={el.uri} address={el.address} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  Images: {
    width: 50,
    height: 50,
    borderWidth: 2,
    margin: 8,
    borderRadius: 100,
  },
});
