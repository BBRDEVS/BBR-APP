import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles';

export default function Login({}): ReactElement {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Login</Text>
    </View>
  );
}
