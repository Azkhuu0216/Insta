import * as React from 'react';
import {Button, Text, StyleSheet, SafeAreaView} from 'react-native';

export function ChatScreen({navigation}) {
  return (
    <SafeAreaView style={css.container}>
      <Text>ChatScreen in!</Text>
    </SafeAreaView>
  );
}
const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
