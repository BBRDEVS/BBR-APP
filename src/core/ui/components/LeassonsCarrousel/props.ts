import { TouchableOpacityProps } from 'react-native';

export interface LeassonsCarrouselProps extends TouchableOpacityProps {
    items: Array<LeassonItem>;
}

export interface LeassonItem {
    id: number;
    title: string;
    category?: string;
    url_image: string;
    active: boolean;
}

