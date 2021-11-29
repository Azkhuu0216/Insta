import React from 'react';

import Icons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Feather';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Tab = ({name1, name2}) => {
  return (
    <View style={css.View1}>
      <TouchableOpacity>
        <Text style={css.Protext}> Jany_james </Text>
      </TouchableOpacity>
      <View flexDirection="row">
        <TouchableOpacity>
          <Icons name={name1} size={26} style={css.TopIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name={name2} size={26} style={css.TopIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  TopIcon: {
    marginHorizontal: 10,
  },
  View1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Protext: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Tab;
