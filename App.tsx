import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { ReactElement, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import AppProvider from './src/core/data/context';

import AppRoutes from './src/routes';

import { navigationRef } from './src/routes';

enableScreens();

export default function App(): ReactElement {

    useEffect(() => SplashScreen.hide(), [])

    return (
        <AppProvider>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle="dark-content"/>
                <AppRoutes/>
            </NavigationContainer>
        </AppProvider>
    );
}
