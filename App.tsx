import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

import ThemeManager from './src/styles/themes';

import AppRoutes from './src/routes';

enableScreens();

export default function App(): ReactElement {
  return (
    <ThemeManager>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AppRoutes />
      </NavigationContainer>
    </ThemeManager>
  );
}
