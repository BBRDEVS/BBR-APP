import React, { ReactElement } from 'react';

import { Button, TextButton } from './styles';

import { ButtonProps } from './props';

export default function ButtonComponent({
  onPress,
  title,
  enabled,
}: ButtonProps): ReactElement {
  return (
    <Button onPress={onPress} enabled={enabled}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}
