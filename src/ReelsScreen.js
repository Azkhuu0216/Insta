import * as React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Video from 'react-native-video';
import MyInput from '../component/MyInput';
import {Container, NativeBaseProvider} from 'native-base';
export function ReelsScreen() {
  return (
    <SafeAreaView style={css.container}>
      <MyInput placeholder="search" />

      <NativeBaseProvider>
        <Container>
          <Video
            source={{uri: 'https://youtu.be/9tobL8U7dQo'}}
            style={css.background}
          />
        </Container>
      </NativeBaseProvider>
    </SafeAreaView>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
