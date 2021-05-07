import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import textbook from '../../assets/images/textbook.png';

import {
  Container,
  ContainerRevisionImage,
  RevisionImage,
  ContainerTitle,
  Title,
} from './styles';

export default function Notification(): ReactElement {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContainerRevisionImage>
          <RevisionImage source={textbook} />
        </ContainerRevisionImage>

        <ContainerTitle>
          <Title>Você não tem nenhuma lição para revisar.</Title>
        </ContainerTitle>
      </Container>
    </SafeAreaView>
  );
}
