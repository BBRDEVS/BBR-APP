import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
`;

export const Content = styled.View`
  padding-left: 10px;
`;

export const TitleCategory = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 15px;
`;
