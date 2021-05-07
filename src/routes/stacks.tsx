import React, { ReactElement, useLayoutEffect } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Notification from '../core/ui/pages/Notification';
import Revision from '../core/ui/pages/Revision';

import Home from '../core/ui/container/Home';
import Introduction from '../core/ui/pages/Introduction';
import Chat from '../core/ui/pages/Chat';

import colors from '../core/ui/styles/colors';

const Stack = createStackNavigator();

interface HomeScreenProps {
  navigation: any;
  route: any;
}

export function HomeStackNavigator({
  navigation,
  route,
}: HomeScreenProps): ReactElement {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Introduction') {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={() => ({
          title: `Olá Luis`,
          headerTitleAlign: 'left',
          cardOverlayEnabled: false,
          headerTintColor: colors.blueDark,
          cardStyle: { backgroundColor: colors.white },
          headerStyle: { shadowColor: 'transparent' },
          headerLeft: () => null,
        })}
        component={Home}
      />
    </Stack.Navigator>
  );
}

export function ChatStackNavigator(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        options={() => ({
          cardStyle: { backgroundColor: colors.white },
          headerStyle: { shadowColor: 'transparent' },
          cardOverlayEnabled: true,
          headerTintColor: colors.blueDark,
          headerLeft: () => null,
        })}
        component={Chat}
      />
    </Stack.Navigator>
  );
}

export function RevisionStackNavigator(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Revision"
        options={({ navigation }) => ({
          title: 'Revisão',
          cardStyle: { backgroundColor: colors.white },
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
}

export function NotificationStackNavigator(): ReactElement {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        options={({ navigation }) => ({
          title: 'Notificações',
          cardStyle: { backgroundColor: colors.white },
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
}
