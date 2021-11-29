import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Send from 'react-native-vector-icons/Feather';

const Post = ({user, imgSRc, address}) => {
  const [btnActive, onBtnActive] = useState(false);
  const [state, setState] = useState({
    color: '#222',
  });
  const onClick = () => {
    onBtnActive(!btnActive);
    const color = btnActive ? '#222' : 'red';
    setState({color});
  };
  return (
    <View style={css.Post}>
      <View
        flexDirection="row"
        style={{
          alignItems: 'center',
        }}>
        <Image
          source={imgSRc}
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: 'gray',
            marginStart: 15,
          }}
        />
        <View>
          <Text style={{fontWeight: 'bold', marginStart: 10}}>{user}</Text>
          <Text style={{marginStart: 10}}>{address}</Text>
        </View>
      </View>
      <View>
        <Image source={imgSRc} style={css.images} />
      </View>
      <View style={css.ViewIcon}>
        <TouchableOpacity key={'1'} onPress={() => onClick()}>
          <Icon name="heart-o" size={26} color={state.color} />
        </TouchableOpacity>
        <TouchableOpacity key={'2'}>
          <Ionicons name="ios-chatbubble-outline" size={26} style={css.Icon} />
        </TouchableOpacity>
        <TouchableOpacity key={'3'}>
          <Send name="send" size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;

const css = StyleSheet.create({
  Post: {
    marginTop: 10,
  },
  title: {
    fontSize: 32,
  },
  images: {
    width: '100%',
    marginTop: 10,
  },
  ViewIcon: {
    flexDirection: 'row',
    marginStart: 18,
    marginTop: 10,
  },
  Icon: {
    marginHorizontal: 10,
  },
});
