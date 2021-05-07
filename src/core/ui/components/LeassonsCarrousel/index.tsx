import React, { ReactElement } from 'react';
import { Image } from 'react-native';

import { Container, TextLeasson, ContainerText, ItemCarrousel } from './styles';

import { LeassonsCarrouselProps } from './props';

export default function LeassonsCarrouselComponent({
  item,
  onPress,
}: LeassonsCarrouselProps): ReactElement {
  return (
    <ItemCarrousel>
      <Container onPress={onPress}>
        <Image
          source={{ uri: item.url_image }}
          style={{
            width: 253,
            height: 162,
            borderRadius: 8,
            opacity: item.active === true ? 1 : 0.2,
          }}
        />
        <ContainerText style={{ opacity: item.active === true ? 1 : 0.2 }}>
          <TextLeasson>{item.title}</TextLeasson>
        </ContainerText>
      </Container>
    </ItemCarrousel>
  );
}
