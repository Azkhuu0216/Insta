import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Octicons';
import Send from 'react-native-vector-icons/Feather';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Tab = ({name1, name2, name3, navigation, onPress}) => {
  return (
    <View style={css.TabContainer}>
      <Text style={css.Insta}>Instagram</Text>
      <View style={css.TopContainer}>
        <TouchableOpacity key={'5'}>
          <Icons name={name1} size={26} style={css.TopIcon} />
        </TouchableOpacity>
        <TouchableOpacity key={'7'}>
          <Icon name={name2} size={26} style={css.TopIcon} />
        </TouchableOpacity>
        <TouchableOpacity key={'6'} title="pro" onPress={onPress}>
          <Send name={name3} size={26} style={css.LastIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  TabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TopContainer: {
    flexDirection: 'row',
  },
  TopIcon: {
    marginHorizontal: 10,
  },
  LastIcon: {
    marginStart: 10,
    marginRight: 20,
  },
  Insta: {
    fontWeight: 'bold',
    fontSize: 25,
    marginStart: 20,
  },
});

export default Tab;
