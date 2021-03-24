import React, { ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../core/ui/pages/Home';
import Introduction from '../core/ui/pages/Introduction';
import SignIn from '../core/ui/pages/SignIn';
import Welcome from '../core/ui/pages/Welcome';

import { headerShownFalse } from './styles';
import { useHiddenTabs } from 'core/ui/hooks/useHiddenTabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ route }) => ({
          title: `Ola Luis`,
          cardOverlayEnabled: true,
          headerTintColor: '#09164F',
          headerStyle: { backgroundColor: '#FFF' },
          headerLeft: () => null,
        })}
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
};

function MainBottomNavigator(): ReactElement {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
    </Tab.Navigator>
  );
}

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={headerShownFalse}
        component={Welcome}
      />

      <Stack.Screen
        name="SignIn"
        options={headerShownFalse}
        component={SignIn}
      />

      <Stack.Screen
        name="MainHomeNavigation"
        options={headerShownFalse}
        component={MainBottomNavigator}
      />
    </Stack.Navigator>
  );
}
