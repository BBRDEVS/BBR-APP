import React, { ReactElement } from 'react';

import { Container, Icon, Content} from './styles';

import { ThemeSelectorProps, ThemeItem} from './props';
import { Image, View } from 'react-native';

export default function ThemeSelectorComponent({
    id,
    title,
    theme,
    icon
}: ThemeSelectorProps): ReactElement {
    return (
     <Container>
         <Icon>
             <Image source={require(icon)} />
         </Icon>
     </Container>
    );
}
