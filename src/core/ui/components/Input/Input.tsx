import React, { ReactElement, ComponentProps } from 'react';
import { TextInput } from 'react-native';
import { useField } from 'formik';

const Input = (props: ComponentProps<typeof TextInput>): ReactElement => {
  const [field] = useField(props.name);

  return (
    <TextInput
      style={{
        borderWidth: 2,
        borderColor: '#161a20',
        width: '100%',
        marginTop: 20,
        padding: 10,
        borderRadius: 16,
      }}
      {...props}
      value={field.value}
    />
  );
};

export default Input;
