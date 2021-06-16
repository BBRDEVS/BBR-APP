import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: 16px;
    padding-right: 16px;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
`;
export const InputText = styled.TextInput`
  border-width: 1px;
  background: ${colors.grayLight};
  border-color: ${colors.greyDark};
  margin-top: 30px;
  padding-top: 8px;
  padding-left: 25px;
  padding-bottom: 8px;
  padding-right: 25px;
  border-radius: 16px;
  margin-right: 8px;
  border-radius: 8px;
  width: 320px
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
