// import React, { ReactElement } from 'react';
// import { SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import textbook from '../../assets/images/textbook.png';

// import {
//   Container,
//   ContainerRevisionImage,
//   RevisionImage,
//   ContainerTitle,
//   Title,
// } from './styles';

// export default function Notification(): ReactElement {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <Container>
//         <ContainerRevisionImage>
//           <RevisionImage source={textbook} />
//         </ContainerRevisionImage>

//         <ContainerTitle>
//           <Title>Você não tem nenhuma lição para revisar.</Title>
//         </ContainerTitle>
//       </Container>
//     </SafeAreaView>
//   );
// }

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
    theme: 'Languages and country',
    icon: 'hamburger',
    number: 2,
  },
  {
    id: 3,
    theme: 'Personal informations',
    icon: 'hamburger',
    number: 3,
  },
];

export default function Revision(): ReactElement {
  const navigation = useNavigation();

  return (
    <Container>
      <FlatList
        style={{ flex: 1 }}
        data={selectTheme}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ThemeSelectorComponent
            theme={item.theme}
            number={item.number}
            icon={item.icon}
            onPress={() => navigation.navigate('RevisionSelector', {})}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
