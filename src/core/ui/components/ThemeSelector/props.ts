import { TouchableOpacityProps } from 'react-native';

export interface ThemeSelectorProps extends TouchableOpacityProps {
    id: number;
    title: string;
    theme: string;
    icon: string;
}

