import React, { ReactElement } from 'react';

import { Container, TextLeasson, ContainerText, ItemCarrousel } from './styles';

import { LeassonsCarrouselProps, LeassonItem } from './props';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function LeassonsCarrouselComponent({
    items
}: LeassonsCarrouselProps): ReactElement {
    return (
        <ScrollView
            style={{
                paddingLeft: 15,
                marginTop: 15,
                marginBottom: 25
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
        >
            {
                items.map((leasson: LeassonItem) =>
                    <ItemCarrousel>
                        <Container onPress={() => console.log('CLICADO NO ITEM' + leasson.id)}>
                            <Image source={{ uri: leasson.url_image }} style={{ width: 253, height: 162, borderRadius: 8, opacity: leasson.active === true ? 1 : 0.2 }} />
                            <ContainerText style={{ opacity: leasson.active === true ? 1 : 0.2 }}>
                                <TextLeasson>{leasson.title}</TextLeasson>
                            </ContainerText>
                        </Container>
                    </ItemCarrousel>)
            }
        </ScrollView>
    );
}
