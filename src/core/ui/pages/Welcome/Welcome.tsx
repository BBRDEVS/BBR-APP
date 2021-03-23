import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';

import men from '../../assets/images/men.png';
import logo from '../../assets/images/logo.png';

import {
  Container,
  ContainerLogo,
  Logo,
  ContainerMen,
  Men,
  ContainerTitle,
  Title,
  ContainerSubTitle,
  SubTitle,
  TextHi,
} from './styles';

export default function Welcome(): ReactElement {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContainerLogo>
          <Logo source={logo} />
        </ContainerLogo>

        <ContainerMen>
          <TextHi>HI</TextHi>
          <Men source={men} />
        </ContainerMen>

        <ContainerTitle>
          <Title>Muitos estudam Inglês, no B.Br você vai falar!</Title>

          <Title>Vamos lá?</Title>
        </ContainerTitle>

        <ContainerSubTitle>
          <SubTitle>Avance e comece já!</SubTitle>
        </ContainerSubTitle>

        <Button title="Seguir" onPress={() => navigation.navigate('SignIn')} />
      </Container>
    </SafeAreaView>
  );
}
