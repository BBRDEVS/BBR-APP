import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  enabled?: boolean;
}

export const Button = styled(RectButton)<ButtonProps>`
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: ${(props) => (props.enabled ? '#ccc' : '#00b3f1')};
  height: 44px;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 16px;
`;
