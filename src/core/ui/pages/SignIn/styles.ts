import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  padding: 32px;
`;

export const ContainerTitle = styled.View`
  margin-top: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #09164f;
  font-weight: bold;
`;

export const ContainerSubtitle = styled.View`
  margin-top: 20px;
`;

export const Subtitle = styled.Text`
  color: #161a20;
  font-size: 16px;
`;

export const ContainerInputs = styled.View``;

export const ContainerInputPassword = styled.View``;

export const ContainerTextResetPassword = styled.TouchableOpacity`
  margin-top: 30px;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 7px;
  margin-bottom: 20px;
`;

export const TextResetPassword = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
`;

export const ErrorText = styled.Text`
  margin-left: 5px;
  margin-top: 5px;
  color: #e52e4d;
  font-weight: bold;
`;
