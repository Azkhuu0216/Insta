import * as React from 'react';
import {Button, TextInput, View, StyleSheet} from 'react-native';
import {AuthContext} from './untils';

export function SignInScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {signIn} = React.useContext(AuthContext);

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
      <Button title="Sign in" onPress={() => signIn({username, password})} />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
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
