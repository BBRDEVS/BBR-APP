import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Home from '../core/ui/pages/Home';

const Stack = createNativeStackNavigator();

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
