import React, { createRef, ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Welcome from '../core/ui/pages/Welcome';
import SignIn from '../core/ui/pages/SignIn';
import ResetPassword from '../core/ui/pages/ResetPassword';

import Home from '../core/ui/container/Home';
import Introduction from '../core/ui/pages/Introduction';
import Chat from '../core/ui/pages/Chat';

import { headerShownFalse } from './styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const navigationRef = createRef();

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params);
}

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        options={({ route }) => ({
          cardOverlayEnabled: true,
          headerTintColor: '#09164F',
          headerStyle: { backgroundColor: '#FFF' },
          headerLeft: () => null,
        })}
        component={Chat}
      />
    </Stack.Navigator>
  );
};

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
      <Tab.Screen name="Chat" component={ChatStackNavigator} />
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

      <Stack.Screen
        options={{ title: '' }}
        name="ResetPasswordNavigation"
        component={ResetPassword}
      />
    </Stack.Navigator>
  );
}
