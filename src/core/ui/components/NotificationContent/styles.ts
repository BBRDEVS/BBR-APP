import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  flex: 1;
  margin-bottom: 20px;
`;

export const ContainerCactusImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CactusImage = styled.Image``;

export const ContainerTitle = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 12px;
`;

export const ContainerTextIntro = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${colors.grayLight};
`;

export const TextInfo = styled.Text`
  color: ${colors.black};
  font-size: 14px;
`;

export const TextInfoHour = styled.Text`
  margin-top: 10px;
  color: ${colors.greyDark};
  margin-bottom: 7px;
  font-size: 12px;
`;
