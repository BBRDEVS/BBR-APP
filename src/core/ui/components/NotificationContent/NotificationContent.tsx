import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';

import { NotificationContentProps } from './props';

import {
  Container,
  ContainerTextIntro,
  TextInfo,
  TextInfoHour,
} from './styles';

export default function NotificationContent({
  title,
  hour,
}: NotificationContentProps): ReactElement {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ContainerTextIntro>
          <TextInfo>{title}</TextInfo>
          <TextInfoHour>{hour}</TextInfoHour>
        </ContainerTextIntro>
      </Container>
    </SafeAreaView>
  );
}
