import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1 0;
  background: ${colors.white};
`;

export const Content = styled.View`
  padding-left: 10px;
`;

export const Scroll = styled.ScrollView`
  margin-top: 15px;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 21px
`;

export const TitleCategory = styled.Text`
  font-size: 16px;
  font-weight: bold;

`;