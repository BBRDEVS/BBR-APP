import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 60px;
  width: 100%;
  padding-left: 23px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: #fff;
  box-shadow: 10px 0 0 ${colors.black};
`;

export const ItemMenu = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  flex: 1;  
  justify-content: space-between;
`;
