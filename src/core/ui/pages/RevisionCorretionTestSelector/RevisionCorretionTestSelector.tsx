import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, TitleCategory } from './styles';

import ThemeRevisionSelector from 'core/ui/components/ThemeRevisionSelector';

const selectTheme = [
  {
    id: 1,
    theme: 'Good',
  },
  {
    id: 2,
    theme: 'Very good',
    icon: 'hamburger',
    number: 2,
  },
];

export default function RevisionCorretionSelector(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <TitleCategory>
          Selecione de acordo com as avaliações enviadas pelo seu professor.
        </TitleCategory>
      </Content>

      <FlatList
        style={{ flex: 1 }}
        data={selectTheme}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemeRevisionSelector
            theme={item.theme}
            icon={item.icon}
            onPress={() => navigation.navigate('')}
            rating
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
