import React, { createRef, ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import Welcome from '../core/ui/pages/Welcome';
import SignIn from '../core/ui/pages/SignIn';
import ResetPassword from '../core/ui/pages/ResetPassword';
import Notification from '../core/ui/pages/Notification';
import Revision from '../core/ui/pages/Revision';

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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={({ route }) => ({
          title: `Olá Luis`,
          headerTitleAlign: 'left',
          cardOverlayEnabled: false,
          headerTintColor: '#09164F',
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: { shadowColor: 'transparent' },
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

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        options={({ route }) => ({
          cardStyle: { backgroundColor: '#FFF' },
          headerStyle: { shadowColor: 'transparent' },
          cardOverlayEnabled: true,
          headerTintColor: '#09164F',
          headerLeft: () => null,
        })}
        component={Chat}
      />
    </Stack.Navigator>
  );
};

const RevisionStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Revision"
        options={({ navigation }) => ({
          title: 'Revisão',
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
        component={Revision}
      />
    </Stack.Navigator>
  );
};

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        options={({ navigation }) => ({
          title: 'Notificações',
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
        component={Notification}
      />
    </Stack.Navigator>
  );
};

function MainBottomNavigator(): ReactElement {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home';
              break;

            case 'Chat':
              iconName = focused ? 'send' : 'send';
              break;

            case 'Revision':
              iconName = focused ? 'star' : 'star';
              break;

            case 'Notification':
              iconName = focused ? 'bell' : 'bell';
              break;

            default:
              break;
          }

          return <Feather name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Chat" component={ChatStackNavigator} />

      <Tab.Screen
        name="Revision"
        options={{ tabBarLabel: 'Revisão' }}
        component={RevisionStackNavigator}
      />
      <Tab.Screen
        name="Notification"
        options={{ tabBarLabel: 'Notificação' }}
        component={NotificationStackNavigator}
      />
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
    </Stack.Navigator>
  );
}
