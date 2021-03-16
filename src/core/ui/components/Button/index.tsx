import React, { ReactElement } from 'react';

import { Button, TextButton } from './styles';

import { ButtonProps } from './props';

export default function ButtonComponent({
  onPress,
  title,
}: ButtonProps): ReactElement {
  return (
    <Button onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}
