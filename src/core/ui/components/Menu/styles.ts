import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-left: 23px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 40px;
  background: #fff;
  box-shadow: 0px -3px 10px #ececec;
`;

export const ItemMenu = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  flex: 1;  
  justify-content: space-between;
`;
