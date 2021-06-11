import React, { ReactElement } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ThemeSelectorProps } from './props';

import {
  Container,
  Content,
  TitleCategory,
  LeassonNumber,
  Touch,
  ContainerTitle,
} from './styles';

export default function ThemeSelectorComponent({
  theme,
  number,
  icon,
  onPress,
}: ThemeSelectorProps): ReactElement {
  return (
    <Touch activeOpacity={0.6} underlayColor="#00B3F1" onPress={onPress}>
      <Container>
        <Content>
          <Icon name={icon} size={25} color="#696969" />
        </Content>
        <ContainerTitle>
          <Content>
            <TitleCategory>{theme}</TitleCategory>
            <LeassonNumber>{`Lição ${number}`}</LeassonNumber>
          </Content>
        </ContainerTitle>
        <Content>
          <Icon name="chevron-right" size={30} color="#696969" />
        </Content>
      </Container>
    </Touch>
  );
}
