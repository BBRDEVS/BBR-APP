import styled from 'styled-components/native';

export const Touch = styled.TouchableHighlight`
  width: 100%;
  border-radius: 8px
`;

export const Container = styled.View`
  border-radius: 8px;
  height: 72px;
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 32px;
  padding-left: 32px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TitleCategory = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;

export const LeassonNumber = styled.Text`
  font-size: 18px;
  font-weight: 100;
`;