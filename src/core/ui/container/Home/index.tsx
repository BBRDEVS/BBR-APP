import React, { ReactElement } from 'react';
import { Container, Content, UserName, TitleCategory, Scroll } from './styles';

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
            <Content>
                <UserName>Olá, Usuário</UserName>
                <TitleCategory>Estudo por frases</TitleCategory>
            </Content>
            <LeassonsCarrouselComponent items={leassons} />
            <Content>
                <TitleCategory>Estudo por frases</TitleCategory>
            </Content>
            <Scroll>
                {/* @TODO - Aplicar os icones e listagem de temas corretos */}
                <ThemeSelectorComponent theme="Food & Drink" number={1} icon="hamburger" />
                <ThemeSelectorComponent theme="Other Theme" number={2} icon="globe-americas" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="trash" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="copy" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="paste" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="sync" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="sync" />
                <ThemeSelectorComponent theme="Other Theme" number={3} icon="sync" />
            </Scroll>

            <MenuComponent />
        </Container>
    );
}
