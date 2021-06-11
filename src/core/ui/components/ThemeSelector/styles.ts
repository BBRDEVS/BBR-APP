import styled from 'styled-components/native';

export const Touch = styled.TouchableHighlight`
  flex: 1;
  border-radius: 8px;
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

export const ContainerTitle = styled.View`
  flex: 1;
  margin-left: 25px;
`;

export const Content = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleCategory = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;

export const LeassonNumber = styled.Text`
  font-size: 18px;
  font-weight: 100;
`;
