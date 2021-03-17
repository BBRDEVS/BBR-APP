import styled from 'styled-components/native';
import colors from '../../styles/colors';
export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  height: 162px;
  width: 253px;
`;

export const ContainerText = styled.View`
  background: ${colors.blueSecondary};
  padding: 5px;
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  bottom: 15px;
  right: 15px;
`;

export const TextLeasson = styled.Text`
  color: ${colors.white};
  font-size: 15px;
`;

export const ItemCarrousel = styled.View`
    margin-right: 20px
`;
