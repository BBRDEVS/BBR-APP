import React, { ReactElement } from 'react';
import { InputProps } from './props';

import { InputText } from './styles';

export default function Input({
  onChangeText,
  placeholder,
  value,
}: InputProps): ReactElement {
  return (
    <InputText
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  );
}
