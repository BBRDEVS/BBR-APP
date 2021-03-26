import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import { ChatProps } from './props';

export default function Chat({}: ChatProps): ReactElement {
  return (
    <Container>
      <Text>Text</Text>
    </Container>
  );
}
