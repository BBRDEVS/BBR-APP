import React, { ReactElement } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Rating, AirbnbRating } from 'react-native-ratings';

import { ThemeSelectorProps } from './props';

import {
  Container,
  Content,
  TitleCategory,
  LeassonNumber,
  Touch,
  ContainerTitle,
} from './styles';
import { View } from 'react-native';

export default function ThemeSelectorComponent({
  theme,
  number,
  onPress,
  subtitle,
  icon,
  rating,
}: ThemeSelectorProps): ReactElement {
  return (
    <Touch activeOpacity={0.6} underlayColor="#00B3F1" onPress={onPress}>
      <Container>
        <Content>
          {rating ? (
            <View style={{ marginBottom: 30 }}>
              <AirbnbRating
                count={3}
                reviews={[]}
                defaultRating={2}
                size={15}
              />
            </View>
          ) : (
            <Icon name={icon} size={25} color="#696969" />
          )}
        </Content>

        <ContainerTitle>
          <Content>
            <TitleCategory>{theme}</TitleCategory>
            {subtitle && <LeassonNumber>{subtitle}</LeassonNumber>}
            {number && <LeassonNumber>{`Lição ${number}`}</LeassonNumber>}
          </Content>
        </ContainerTitle>

        <Content>
          <Icon name="chevron-right" size={30} color="#696969" />
        </Content>
      </Container>
    </Touch>
  );
}
