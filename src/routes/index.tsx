import React, { ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../core/ui/pages/Welcome';
import SignIn from '../core/ui/pages/SignIn';
import ResetPassword from '../core/ui/pages/ResetPassword';

import LessionSelector from '../core/ui/pages/LessionSelector';

import { headerShownFalse } from './styles';

import { MainBottomNavigator } from './bottomtabs';
import Introduction from 'core/ui/pages/Introduction';
import colors from 'core/ui/styles/colors';

const Stack = createStackNavigator();

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
        options={({ navigation }) => ({
          title: '',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: { shadowColor: 'transparent' },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('SignIn')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="ResetPasswordNavigation"
        component={ResetPassword}
      />

      <Stack.Screen
        name="MainHomeNavigation"
        options={headerShownFalse}
        component={MainBottomNavigator}
      />

      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Food And Drink',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: { shadowColor: 'transparent' },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="LessionSelector"
        component={LessionSelector}
      />

      <Stack.Screen
        name="Introduction"
        options={({ navigation }) => ({
          title: 'Food And Drink',
          headerTransparent: true,
          headerTintColor: colors.white,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
