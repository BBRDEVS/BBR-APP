import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StatusBar } from 'react-native';

import AppRoutes from './src/routes';

enableScreens();

export default function App(): ReactElement {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <AppRoutes />
      </NavigationContainer>
    </PaperProvider>

  );
}
