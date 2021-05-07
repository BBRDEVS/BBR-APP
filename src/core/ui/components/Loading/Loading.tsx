import React, { ReactElement } from 'react';
import LottieView from 'lottie-react-native';

import { Container, Title } from './styles';

export default function Loading(): ReactElement {
  return (
    <Container>
      <LottieView source={require('../../assets/loading.json')} autoPlay loop />
      <Title>You can do it!</Title>
    </Container>
  );
}
