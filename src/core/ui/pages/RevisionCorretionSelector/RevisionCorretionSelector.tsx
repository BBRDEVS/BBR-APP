import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Content, TitleCategory } from './styles';

import ThemeRevisionSelector from 'core/ui/components/ThemeRevisionSelector';

const selectTheme = [
  {
    id: 1,
    theme: 'Seus desafios',
    subtitle: 'Saiba onde possa melhorar',
    icon: 'hamburger',
    number: 1,
  },
  {
    id: 2,
    theme: 'Ouça tuuuuuudo',
    subtitle: 'Relembre todas as suas frases',
    icon: 'hamburger',
    number: 2,
  },
];

export default function RevisionCorretionTestSelector(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <Content>
        <TitleCategory>
          Seu professor corrigiu as lições! Veja quais as que você acertou e
          confira quais pontos você pode melhorar.
        </TitleCategory>
      </Content>

      <FlatList
        style={{ flex: 1 }}
        data={selectTheme}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemeRevisionSelector
            theme={item.theme}
            subtitle={item.subtitle}
            icon={item.icon}
            onPress={() => navigation.navigate('RevisionCorretionTestSelector')}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
