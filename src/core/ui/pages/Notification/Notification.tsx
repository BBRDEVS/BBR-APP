import React, { ReactElement } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NotificationContent from '../../components/NotificationContent';

// @ts-ignore
import cactus from '../../assets/images/cactus.png';

import {
  Container,
  ContainerCactusImage,
  CactusImage,
  ContainerTitle,
  Title,
} from './styles';

const dataNotification = [
  {
    id: 0,
    title:
      'Hey, faz um tempinho que você não aparece por aqui! Vamos estudar um pouquinho?',
    hour: 'Ontem, 09:01',
  },
  {
    id: 1,
    title:
      'Chegou suas lições corrigidas de Food & Drink ✅  Toque para checar ',
    hour: 'Ontem, 09:03',
  },
  {
    id: 2,
    title: 'Chegou suas lições corrigidas de Vacation ✅  Toque para checar ',
    hour: 'Ontem, 09:03',
  },
  {
    id: 3,
    title: 'Chegou suas lições corrigidas de Verbs ✅  Toque para checar ',
    hour: 'Ontem, 09:03',
  },
];

export default function Notification(): ReactElement {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <FlatList
          data={dataNotification}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NotificationContent
              hour={item.hour}
              title={item.title}
              onPress={() => navigation.navigate('CheckRevision')}
            />
          )}
          showsVerticalScrollIndicator={false}
        />

        {dataNotification.length === 0 && (
          <ContainerCactusImage>
            <CactusImage source={cactus} />

            <ContainerTitle>
              <Title>Você chegou ao fim das suas notificações</Title>
            </ContainerTitle>
          </ContainerCactusImage>
        )}
      </Container>
    </SafeAreaView>
  );
}
