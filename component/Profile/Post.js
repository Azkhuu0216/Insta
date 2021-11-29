import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Post = () => {
  return (
    <View style={css.View2}>
      <View>
        <Image
          style={css.images}
          source={require('../../photo/image/download.jpeg')}
        />
        <Text style={css.text}> Janybiber James</Text>
      </View>
      <View style={css.post}>
        <View>
          <Text style={css.postText}> 4 </Text>
          <Text> Posts </Text>
        </View>
        <View>
          <Text style={css.postText}> 60 </Text>
          <Text> Followers </Text>
        </View>
        <View>
          <Text style={css.postText}> 42 </Text>
          <Text> Following </Text>
        </View>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  View2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  post: {
    flexDirection: 'row',
    marginTop: 15,
  },
  postText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  images: {
    borderRadius: 100,
    width: 85,
    height: 85,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 0,
  },
});
export default Post;
