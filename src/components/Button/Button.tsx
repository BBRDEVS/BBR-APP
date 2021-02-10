import React, { ReactElement } from 'react';

import { ButtonProps } from './props';

import { ContainerButton, TextButton } from './styles';

export default function Button({ title, onPress }: ButtonProps): ReactElement {
  return (
    <ContainerButton onPress={onPress}>
      <TextButton>{title}</TextButton>
    </ContainerButton>
  );
}
