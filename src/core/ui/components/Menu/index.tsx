import React, { ReactElement, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';


import { Container, ItemMenu } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from 'core/ui/styles/colors';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function MenuComponent({ }): ReactElement {
    const route = useRoute();
    useEffect(() => {
        console.log('active route@:', route.name)
    }, [])
    return (
        <Container>
        <ItemMenu>
            <Icon name="home" size={25} color={route.name === 'Home' ? colors.blueSecondary : colors.black} />
            <Text style={{ color: route.name === 'Home' ? colors.blueSecondary : colors.black }}>Home</Text>
        </ItemMenu>
        <ItemMenu>
            <Icon name="comments" size={25} color={route.name === 'Chat' ? colors.blueSecondary : colors.black} />
            <Text style={{ color: route.name === 'Chat' ? colors.blueSecondary : colors.black }}>Chat</Text>
        </ItemMenu>
        <ItemMenu>
            <Icon name="star" size={25} color={route.name === 'Revisao' ? colors.blueSecondary : colors.black} />
            <Text style={{ color: route.name === 'Revisao' ? colors.blueSecondary : colors.black }}>Revisão</Text>
        </ItemMenu>
        <ItemMenu>
            <Icon name="bell" size={25} color={route.name === 'Notificacao' ? colors.blueSecondary : colors.black} />
            <Text style={{ color: route.name === 'Notificacao' ? colors.blueSecondary : colors.black }}>Notificação</Text>
        </ItemMenu>
    </Container>
    );
}
