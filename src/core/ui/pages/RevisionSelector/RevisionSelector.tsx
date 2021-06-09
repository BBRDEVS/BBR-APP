import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, TitleCategory } from './styles';

import ThemeSelectorComponent from 'core/ui/components/ThemeSelector';

const selectTheme = [
  {
    id: 1,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 1,
  },
  {
    id: 2,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 2,
  },
  {
    id: 3,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 3,
  },
  {
    id: 4,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 4,
  },
  {
    id: 5,
    theme: 'Food and Drink',
    icon: 'hamburger',
    number: 5,
  },
];

export default function RevisionSelector(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <TitleCategory>
          Veja quais são lições disponíveis para que você
        </TitleCategory>
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
            onPress={() => navigation.navigate('RevisionCorretionSelector')}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
