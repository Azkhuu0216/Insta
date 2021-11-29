import React from 'react';
import {Dimensions, Image, View} from 'react-native';
let {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const renderImages = ({item, index}) => {
  return (
    <View style={{margin: 1}}>
      <Image
        source={{uri: item.image}}
        style={{
          height: screenHeight / 6,
          width: screenWidth / 3,
        }}
      />
    </View>
  );
};
export default renderImages;
