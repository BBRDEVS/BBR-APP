import styled from 'styled-components/native';

export const Touch = styled.TouchableHighlight`
  width: 100%;
  border-radius: 8px;
  padding: 0 5px;
`;

export const Container = styled.View`
  border-radius: 8px;
  height: 72px;
  flex-direction: row;
  justify-content: space-between;
  margin: 7px 0;
  align-items: center;
  padding: 0 20px;
`;

export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleCategory = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

export const LeassonNumber = styled.Text`
  font-size: 14px;
  font-weight: 100;
`;
