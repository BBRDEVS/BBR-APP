import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
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
    theme: 'titulo da bagaça',
    icon: 'hamburger',
    number: 1,
  },
  {
    id: 2,
    theme: 'titulo da bagaça',
    icon: 'hamburger',
    number: 2,
  },
  {
    id: 3,
    theme: 'titulo da bagaça',
    icon: 'hamburger',
    number: 3,
  },
  {
    id: 4,
    theme: 'titulo da bagaça',
    icon: 'hamburger',
    number: 4,
  },
  {
    id: 5,
    theme: 'titulo da bagaça',
    icon: 'hamburger',
    number: 5,
  },
];

export default function HomeContainer(): ReactElement {
  return (
    <Container>
      <Content>
        <TitleCategory>Estudo por frases</TitleCategory>
        <LeassonsCarrouselComponent items={leassons} />
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
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
