import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';

import Button from '../../components/Button';

import {
  Container,
  ContainerHomeWork,
  ContainerDetailsHomeWork,
  ImageHomeWork,
  TitleLession,
  TitleHomeWork,
  DescriptionHomeWork,
} from './styles';

export default function Introduction({ navigation }): ReactElement {
  return (
    <Container>
      <ImageHomeWork
        source={{
          uri: 'https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg',
        }}
      />

      <ContainerHomeWork>
        <ContainerDetailsHomeWork>
          <TitleLession>Lição 01</TitleLession>
          <TitleHomeWork>Food & Drink</TitleHomeWork>
          <DescriptionHomeWork>
            Este tema é composto por três lições enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut.
          </DescriptionHomeWork>
        </ContainerDetailsHomeWork>

        <Button title="Próximo" onPress={() => {}} />
      </ContainerHomeWork>
      <SafeAreaView />
    </Container>
  );
}
