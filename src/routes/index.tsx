import React, { ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../core/ui/pages/Home';
import Introduction from '../core/ui/pages/Introduction';
import SignIn from '../core/ui/pages/SignIn';

const Stack = createStackNavigator();

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        options={{
          headerShown: false,
        }}
        component={SignIn}
      />

      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
      <Stack.Screen
        name="Introduction"
        options={({ navigation, route }) => ({
          title: 'Food And Drink',
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../src/core/ui/assets/images/next.png')}
              />
            </TouchableOpacity>
          ),
        })}
        component={Introduction}
      />
    </Stack.Navigator>
  );
}
