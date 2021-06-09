import React, { ReactElement } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { Easing } from 'react-native-reanimated';
import { runTiming } from 'react-native-redash';

import Button from '../../components/Button';
import CircularProgress from '../../components/CircularProgress';

import degree from '../../assets/images/diploma.png';

import {
  Container,
  ContainerContentRevision,
  ContainerDegree,
  Degree,
  ContainerTitleDegree,
  TextDegree,
  ContainerDescriptionDegree,
  DescroptionDegree,
  ContainerCircularProgress,
} from './styles';

const { Clock } = Animated;

export default function Welcome(): ReactElement {
  const navigation = useNavigation();

  const clock = new Clock();
  const config = {
    duration: 10 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContainerContentRevision>
          <ContainerDegree>
            <Degree source={degree} />
          </ContainerDegree>

          <ContainerTitleDegree>
            <TextDegree>Uoooow</TextDegree>
          </ContainerTitleDegree>

          <ContainerDescriptionDegree>
            <DescroptionDegree>
              Você completou a{' '}
              <DescroptionDegree fontBold>lição 1</DescroptionDegree> do tema{' '}
              <DescroptionDegree fontBold>"Food & Drink"</DescroptionDegree>.
              Verifique o que você pode Continue para a{' '}
              <DescroptionDegree fontBold>"lesson 2"</DescroptionDegree>!
            </DescroptionDegree>
          </ContainerDescriptionDegree>

          <ContainerCircularProgress>
            <CircularProgress progress={runTiming(clock, 0, config)} />
            <CircularProgress progress={runTiming(clock, 0, config)} />
          </ContainerCircularProgress>
        </ContainerContentRevision>

        <Button
          title="Checar"
          onPress={() => navigation.navigate('RevisionSelector')}
        />
      </Container>
    </SafeAreaView>
  );
}
