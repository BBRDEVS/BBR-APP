import React, { ReactElement } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import { ChatProps } from './props';
import SendMessageAreaComponent from 'core/ui/components/SendMessageArea';

export default function Chat({}: ChatProps): ReactElement {
  return (
    <Container>
      <SendMessageAreaComponent />
    </Container>
  );
}
