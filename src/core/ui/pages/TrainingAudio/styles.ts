import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get("window").height;

export const ContainerTitle = styled.View`
  padding: 15px;
`

export const Title = styled.Text`
  color: ${colors.black};
`



