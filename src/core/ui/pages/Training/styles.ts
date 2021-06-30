import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

const WindowWidth = Dimensions.get('window').width;
const WindowHeight = Dimensions.get("window").height

export const ContainerFullHeight = styled.View`
  height: 100%;
  width: ${WindowWidth};
  overflow: hidden;
`

export const ContainerFullHeightContent = styled.View`
  flex: 1;
  height: ${WindowHeight};
  background-color: ${colors.white};
  padding-top: 20px;
`

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTraining = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 12px;
`;

export const ContainerDetailsTraining = styled.View``;

export const ImageTraining = styled.Image`
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

export const TitleTraining = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: #09164f;
  margin-bottom: 10px;
`;

export const DescriptionTraining = styled.Text`
  font-size: 16px;
`;
