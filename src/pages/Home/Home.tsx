import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import { HomeProps } from './props';

import { Styles } from './styles';

export default function Home({}: HomeProps): ReactElement {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Chama nois chupeta</Text>
    </View>
  );
}
