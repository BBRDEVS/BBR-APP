import { TouchableOpacityProps } from 'react-native';

export interface ThemeSelectorProps extends TouchableOpacityProps {
    theme: string;
    number: number;
    icon: string;
}

