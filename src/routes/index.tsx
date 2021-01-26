import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
