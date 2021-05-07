import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import {
  HomeStackNavigator,
  ChatStackNavigator,
  RevisionStackNavigator,
  NotificationStackNavigator,
} from './stacks';

const Tab = createBottomTabNavigator();

export function MainBottomNavigator(): ReactElement {
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
