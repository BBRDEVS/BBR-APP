import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Welcome from '../pages/Welcome';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="Welcome" component={Welcome} />
      <Stack.Screen options={options} name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
