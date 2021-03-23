import { useLayoutEffect } from 'react';
import {
  useNavigation,
  useRoute,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';

export function useHiddenTabs(hiddenTabRoutesArray: any, fallbackRoute: any) {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? fallbackRoute;

    navigation.setOptions({
      tabBarVisible: !hiddenTabRoutesArray.includes(routeName),
    });
  }, [navigation, route]);
}
