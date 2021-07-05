import React, { ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../core/ui/pages/Welcome';
import SignIn from '../core/ui/pages/SignIn';
import ResetPassword from '../core/ui/pages/ResetPassword';

import LessionSelector from '../core/ui/pages/LessionSelector';
import RevisionSelector from '../core/ui/pages/RevisionSelector';
import RevisionCorretionSelector from '../core/ui/pages/RevisionCorretionSelector';
import RevisionCorretionTestSelector from '../core/ui/pages/RevisionCorretionTestSelector';
import CheckRevision from '../core/ui/pages/CheckRevision';

import Training from '../core/ui/pages/Training'
import TrainingAudio from '../core/ui/pages/TrainingAudio'

import { headerShownFalse } from './styles';

import { MainBottomNavigator } from './bottomtabs';
import Introduction from 'core/ui/pages/Introduction';
import colors from 'core/ui/styles/colors';
import Chat from 'core/ui/pages/Chat';

const Stack = createStackNavigator();

export default function AppRoutes(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="TrainingAudio"
          options={({ navigation }) => ({
            title: 'Food And Drink',
            headerStyle: {
              elevation: 0,
            },
            cardStyle: {
              backgroundColor: colors.white
            },
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                      source={require('../../src/core/ui/assets/images/next.png')}
                  />
                </TouchableOpacity>
            ),
          })}
          component={TrainingAudio}
      />

      <Stack.Screen
          name="Training"
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
          component={Training}
      />

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
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
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
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
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
        options={({ navigation }) => ({
          title: 'Food And Drink',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('Revision')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="RevisionSelector"
        component={RevisionSelector}
      />

      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Food And Drink',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('RevisionSelector')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="RevisionCorretionSelector"
        component={RevisionCorretionSelector}
      />

      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Food And Drink',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('RevisionCorretionSelector')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="RevisionCorretionTestSelector"
        component={RevisionCorretionTestSelector}
      />

      <Stack.Screen
        options={({ navigation }) => ({
          title: '',
          cardStyle: { backgroundColor: '#06397D' },
          headerStyle: {
            shadowColor: 'transparent',
            backgroundColor: '#06397D',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => navigation.navigate('Notification')}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        name="CheckRevision"
        component={CheckRevision}
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
      
      <Stack.Screen
        name="Chat"
        options={({ navigation }) => ({
          title: 'Food And Drink',
          headerTransparent: true,
          headerTintColor: colors.black,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.goBack()}>
              <Image
                source={require('../../src/core/ui/assets/images/arrow-back-black.png')}
              />
            </TouchableOpacity>
          ),
        })}
        component={Chat}
      />


    </Stack.Navigator>
  );
}
