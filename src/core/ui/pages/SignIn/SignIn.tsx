import React, { ReactElement, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { SignInrops } from './props';

import {
  Container,
  ContainerSubtitle,
  ContainerTitle,
  Subtitle,
  Title,
  ContainerInputs,
  ContainerTextResetPassword,
  TextResetPassword,
} from './styles';
import { View } from 'react-native';

function HidePassword(): ReactElement {
  return (
    <View>
      <Text>oioiasdasdoioioiooi</Text>
    </View>
  );
}

export default function SignIn({}: SignInrops): ReactElement {
  const navigation = useNavigation();

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <ContainerTitle>
          <Title>Olá,</Title>
        </ContainerTitle>

        <ContainerSubtitle>
          <Subtitle>Logue por e-mail</Subtitle>
        </ContainerSubtitle>

        <ContainerInputs>
          <Input
            value={username}
            onChangeTex={setUserName}
            placeholder="Digite aqui seu e-email"
          />

          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Digite aqui sua senha"
            isPassword={<HidePassword />}
          />
        </ContainerInputs>

        <ContainerTextResetPassword>
          <TextResetPassword>Esqueci minha senha</TextResetPassword>
        </ContainerTextResetPassword>

        <Button title="Acessar" onPress={() => navigation.navigate('Home')} />

        {/* <Switch
        value={theme.mode === 'dark'}
        onValueChange={(value) => theme.setMode(value ? 'dark' : 'light')}
      /> */}
      </Container>
    </TouchableWithoutFeedback>
  );
}
