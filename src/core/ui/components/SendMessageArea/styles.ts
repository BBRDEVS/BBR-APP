import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
`;
export const InputText = styled.TextInput`
  border-width: 1px;
  background: ${colors.grayLight};
  border-color: ${colors.greyDark};
  width: 100%;
  margin-top: 30px;
  padding-top: 8px;
  padding-left: 25px;
  padding-bottom: 8px;
  padding-right: 25px;
  border-radius: 16px;
  width: 70%;
  margin-right: 8px;
`;

export const SendMessageButton = styled.View`
    width: 40px;
    height: 40px;
    background: ${colors.blueSecondary};
    border-radius: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
