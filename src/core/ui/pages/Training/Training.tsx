import React, { ReactElement, useRef } from 'react';
import { SafeAreaView, Animated, View, Dimensions } from 'react-native';

import Button from '../../components/Button';

import { Traning } from './props'

import {
  ContainerFullHeight,
  ContainerFullHeightContent,
  Container,
  ContainerTraining,
  ContainerDetailsTraining,
  ImageTraining,
  TitleLession,
  TitleTraining,
  DescriptionTraining,
} from './styles';

const WindowWidth = Dimensions.get('window').width;

export default function Training({}: Traning): ReactElement {
  const AnimatedView = new Animated.createAnimatedComponent(View);
  const offset = useRef(new Animated.Value(0)).current
  let value = 0;

  function next() {
    Animated.timing(offset, {
      toValue: value + 100,
      useNativeDriver: true
    }).start(() => value = value + 100)
  }

  function prev() {
    Animated.timing(offset, {
      toValue: value - 100,
      useNativeDriver: true
    }).start(() => value = value - 100)
  }

  return (
      <AnimatedView
          style={{
            flex: 1,
            flexDirection: "row",
            transform: [
              {
                translateX: offset.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, WindowWidth * -1],
                }),
              },
            ],
          }}
      >
        {/** INTRO HORA DO TREINO <<===================== */}
        <ContainerFullHeight>
          <ContainerFullHeightContent>
            <Container>
              <ImageTraining
                  source={{
                    uri: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Sending-Audio-e1618833748707.jpg',
                  }}
              />
              <ContainerTraining>
                <ContainerDetailsTraining>
                  <TitleLession>Food and Drink</TitleLession>
                  <TitleTraining>Hora do Treino</TitleTraining>
                  <DescriptionTraining>
                    Insira em cada campo a frase que você quer enviar para o seu professor.
                  </DescriptionTraining>
                </ContainerDetailsTraining>

                <Button title="Próximo" onPress={next}/>
              </ContainerTraining>
              <SafeAreaView/>
            </Container>
          </ContainerFullHeightContent>
        </ContainerFullHeight>

        {/** HORA DO TREINO <<===================== */}
        <ContainerFullHeight>
          <ContainerFullHeightContent>
            <Container>
              <ImageTraining
                  source={{
                    uri: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Sending-Audio-e1618833748707.jpg',
                  }}
              />
              <ContainerTraining>
                <ContainerDetailsTraining>
                  <TitleLession>Food and Drink</TitleLession>
                  <TitleTraining>Hora do Treino</TitleTraining>
                  <DescriptionTraining>
                    Não se esqueça de que você deve compor em áudio cada um das frases, usando “i” ou “you” + um dos
                    verbos aprendidos + um dos substantivos.
                  </DescriptionTraining>
                </ContainerDetailsTraining>

                <Button title="Começar" onPress={next}/>
              </ContainerTraining>
              <SafeAreaView/>
            </Container>
          </ContainerFullHeightContent>
        </ContainerFullHeight>
      </AnimatedView>
  );
}
