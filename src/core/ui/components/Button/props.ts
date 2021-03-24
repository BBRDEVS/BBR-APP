import { GestureHandlerProperties } from 'react-native-gesture-handler';

export interface ButtonProps extends GestureHandlerProperties {
  onPress: () => void;
  title: string;
  enabled?: boolean;
}
