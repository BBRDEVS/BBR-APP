import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

import { Container, TextLeasson, ContainerText, ItemCarrousel } from './styles';

import { LeassonsCarrouselProps, LeassonItem } from './props';
import { Image } from 'react-native';

export default function LeassonsCarrouselComponent({
  items,
}: LeassonsCarrouselProps): ReactElement {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ItemCarrousel>
          <Container onPress={() => console.log('CLICADO NO ITEM' + item.id)}>
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
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}
