import React, { ReactElement } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { Container } from './styles';

import LeassonsCarrouselComponent from 'core/ui/components/LeassonsCarrousel';
import ThemeSelectorComponent from 'core/ui/components/ThemeSelector';
import MenuComponent from 'core/ui/components/Menu';


// it will be received by API
const leassons = [
    { id: 1, title: 'Food and Drink', category: 'Food', url_image: 'https://picsum.photos/200/300', active: true },
    { id: 2, title: 'Hobies', category: 'Vacations', url_image: 'https://picsum.photos/200/300', active: false },
    { id: 3, title: 'Work', category: 'Work', url_image: 'https://picsum.photos/200/300', active: false },
    { id: 4, title: 'Games', category: 'Entertreiment', url_image: 'https://picsum.photos/200/300', active: false }
];

export default function HomeContainer(): ReactElement {
    return (
        <Container>
            <View style={{ flex: 1}}>
                <Text>Olá, Usuário</Text>
                <Text>Estudo por frases</Text>
                <LeassonsCarrouselComponent items={leassons} />
                <ThemeSelectorComponent theme="Food & Drink" number={1} icon="hamburger" />
                <ThemeSelectorComponent theme="Languages & Country" number={2} icon="globe-americas" />
            </View>
            <MenuComponent />
        </Container>
    );
}
