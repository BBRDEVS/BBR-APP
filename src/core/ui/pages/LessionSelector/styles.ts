import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
  padding: 32px;
`;

export const Content = styled.View`
  padding: 32px;
`;

export const TitleCategory = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 15px;
`;
