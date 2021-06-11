import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, TitleCategory } from './styles';

import LeassonsCarrouselComponent from 'core/ui/components/LeassonsCarrousel';
import ThemeSelectorComponent from 'core/ui/components/ThemeSelector';

// it will be received by API
const leassons = [
  {
    id: 1,
    title: 'Food and Drink',
    category: 'Food',
    url_image: 'https://picsum.photos/200/300',
    active: true,
  },
  {
    id: 2,
    title: 'Hobies',
    category: 'Vacations',
    url_image: 'https://picsum.photos/200/300',
    active: false,
  },
  {
    id: 3,
    title: 'Work',
    category: 'Work',
    url_image: 'https://picsum.photos/200/300',
    active: false,
  },
  {
    id: 4,
    title: 'Games',
    category: 'Entertreiment',
    url_image: 'https://picsum.photos/200/300',
    active: false,
  },
];

const selectTheme = [
  {
    id: 1,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 1,
  },
  {
    id: 2,
    theme: 'Languages & Country',
    icon: 'hamburger',
    number: 2,
  },
  {
    id: 3,
    theme: 'Personal Informations',
    icon: 'apple',
    number: 3,
  },
];

export default function HomeContainer(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <TitleCategory>Estudo por frases</TitleCategory>
        <FlatList
          data={leassons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LeassonsCarrouselComponent
              onPress={() => navigation.navigate('LessionSelector', {})}
              item={item}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Content>

      <Content>
        <TitleCategory>Estudo por frases</TitleCategory>
      </Content>
      <FlatList
        style={{ flex: 1 }}
        data={selectTheme}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemeSelectorComponent
            theme={item.theme}
            number={item.number}
            icon={item.icon}
            onPress={() => navigation.navigate('LessionSelector', {})}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
