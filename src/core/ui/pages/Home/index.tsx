import React, { ReactElement } from 'react';
import { View, Text } from 'react-native';

import { HomeProps } from './props';

import { Styles } from './styles';

import LeassonsCarrouselComponent from 'core/ui/components/LeassonsCarrousel';
import ThemeSelectorComponent from 'core/ui/components/ThemeSelector';

const leassons = [
  {id: 1, title: 'Food and Drink', category: 'Food', url_image: 'https://picsum.photos/200/300', active: true},
  {id: 2, title: 'Hobies', category: 'Vacations', url_image: 'https://picsum.photos/200/300', active: false},
  {id: 3, title: 'Work', category: 'Work', url_image: 'https://picsum.photos/200/300', active: false},
  {id: 4, title: 'Games', category: 'Entertreiment', url_image: 'https://picsum.photos/200/300', active: false}
];

export default function Home({}: HomeProps): ReactElement {
  return (
    <View style={Styles.container}>
      <Text>Olá, Usuário</Text>
      <Text>Estudo por frases</Text>
      <LeassonsCarrouselComponent items={leassons} />
      <ThemeSelectorComponent  theme="Food & Drink" number={1} icon={'https://w7.pngwing.com/pngs/518/962/png-transparent-fast-food-drink-junk-food-eating-food-icon-food-text-logo.png'} />
      <ThemeSelectorComponent  theme="Holiday" number={2} icon={'https://w7.pngwing.com/pngs/518/962/png-transparent-fast-food-drink-junk-food-eating-food-icon-food-text-logo.png'} />

    </View>
  );
}
