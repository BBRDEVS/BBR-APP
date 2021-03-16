import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const WindowWidth = Dimensions.get('window').width;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHomeWork = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 12px;
`;

export const ContainerDetailsHomeWork = styled.View``;

export const ImageHomeWork = styled.Image`
  width: ${WindowWidth};
  height: 339px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const TitleLession = styled.Text`
  color: ${colors.greyMedium};
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;

export const TitleHomeWork = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #09164f;
  margin-bottom: 10px;
`;

export const DescriptionHomeWork = styled.Text`
  font-size: 16px;
`;
