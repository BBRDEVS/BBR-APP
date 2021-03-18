import React, { ReactElement } from 'react';

import { Container, Icon, Content, TitleCategory, LeassonNumber } from './styles';

import { ThemeSelectorProps } from './props';
import { Image, View } from 'react-native';

export default function ThemeSelectorComponent({
    theme,
    number,
    icon
}: ThemeSelectorProps): ReactElement {
    return (
     <Container>
            <Icon>
                <Image source={{ uri: icon }} style={{ width: 25, height: 25 }} />
            </Icon>
            <Content>
                <TitleCategory>{ theme }</TitleCategory>
                <LeassonNumber>{`Lição ${number}`}</LeassonNumber>
            </Content>
     </Container>
    );
}
