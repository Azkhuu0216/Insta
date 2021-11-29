import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Fontisto';
const Tab = ({name1, name2}) => {
  return (
    <View style={css.View}>
      <View>
        <Text style={css.Shop}>Shop</Text>
      </View>
      <View style={css.View}>
        <TouchableOpacity key={'1'}>
          <Icons name={name1} size={25} />
        </TouchableOpacity>
        <TouchableOpacity key={'2'} style={css.TouchableOpacity}>
          <Icon name={name2} size={26} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchableOpacity: {
    marginHorizontal: 20,
  },
  Shop: {
    fontWeight: '600',
    fontSize: 20,
  },
});
export default Tab;
