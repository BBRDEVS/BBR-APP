import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  height: 72px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: row;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Icon = styled.View`
    width: 24px;
    height: 22px;
    padding-top: 25px;
    padding-left: 25px
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TitleCategory = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;

export const LeassonNumber = styled.Text`
  font-size: 18px;
  font-weight: 100;
`;