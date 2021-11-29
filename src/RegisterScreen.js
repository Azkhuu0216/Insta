import * as React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';

export function RegisterScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const register = (username, password) => {
    console.log(' You can hansle api register at there');
  };
  return (
    <View style={css.container}>
      <TextInput
        style={css.TextInput}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={css.TextInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={() => register({username, password})} />
    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
  },
});
