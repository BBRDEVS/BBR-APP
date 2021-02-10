import { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  onChangeText: () => void | undefined;
  value: string;
  placeholder?: string;
}
