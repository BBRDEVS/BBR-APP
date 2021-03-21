import React, { ReactElement } from 'react';

import { Container, Content, TitleCategory, LeassonNumber, Touch } from './styles';

import { ThemeSelectorProps } from './props';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ThemeSelectorComponent({
    theme,
    number,
    icon
}: ThemeSelectorProps): ReactElement {

    return (
        <Touch activeOpacity={0.6}
        underlayColor="#00B3F1" onPress={() => console.log('Pressed')}>
            <Container>
                <Content>
                    <Icon name={icon} size={25} color="#696969" />
                </Content>
                <Content>
                    <TitleCategory>{theme}</TitleCategory>
                    <LeassonNumber>{`Lição ${number}`}</LeassonNumber>
                </Content>
                <Content>
                    <Icon name="chevron-right" size={30} color="#696969" />
                </Content>
            </Container>
        </Touch>

    );
}
