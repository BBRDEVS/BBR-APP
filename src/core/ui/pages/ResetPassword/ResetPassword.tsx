import React, { ReactElement } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormikProvider, useFormik, MyFormValues } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../../../data/context/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { ResetPasswordProps } from './props';

import {
  Container,
  ContainerSubtitle,
  ContainerTitle,
  Subtitle,
  Title,
  ContainerInputs,
  ErrorText,
} from './styles';

export default function ResetPassword({}: ResetPasswordProps): ReactElement {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: { email: 'email@teste.com' },

    validationSchema: Yup.object().shape({
      email: Yup.string().required('Digite seu email'),
    }),

    onSubmit: (values) => {
      console.log(values);
      navigation.navigate('SignIn');
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <ContainerTitle>
          <Title>Olá, 👋🏻</Title>
        </ContainerTitle>

        <ContainerSubtitle>
          <Subtitle>Recuperar Senha</Subtitle>
        </ContainerSubtitle>

        <ContainerInputs>
          <FormikProvider value={formik}>
            <Input
              name="email"
              placeholder="Digite aqui seu e-email"
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              returnKeyType="send"
            />

            {formik.touched.email && formik.errors.email && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}
          </FormikProvider>
        </ContainerInputs>

        <View style={{ marginTop: 20 }}>
          <Button title="Recuperar" onPress={formik.handleSubmit} />
        </View>
      </Container>
    </TouchableWithoutFeedback>
  );
}
