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

export const Icon = styled.View`
    width: 24px;
    height: 22px
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;