import React, { ReactElement } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../styles/themes';
import { Switch } from 'react-native';

import { SignInrops } from './props';

import { Container, Title } from './styles';

export default function SignIn({}: SignInrops): ReactElement {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <Button title="Entrar" onPress={() => navigation.navigate('Home')} />

      <Text>Chama nois chupeta</Text>
      <Text style={{ fontSize: 32 }}>Troca a cor ai</Text>

      <Switch
        value={theme.mode === 'dark'}
        onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
      />
    </Container>
  );
}
