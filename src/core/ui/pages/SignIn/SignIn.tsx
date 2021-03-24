import React, { ReactElement, useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { SignInrops } from './props';

import {
  Container,
  ContainerSubtitle,
  ContainerTitle,
  Subtitle,
  Title,
  ContainerInputs,
  ContainerTextResetPassword,
  TextResetPassword,
  ErrorText,
} from './styles';

export default function SignIn({}: SignInrops): ReactElement {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: { email: '', password: '' },

    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email é obrigatório'),
      password: Yup.string().required('Senha é obrigatório'),
    }),

    onSubmit: (values) => {
      console.log(values);
      navigation.navigate('MainHomeNavigation');
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <ContainerTitle>
          <Title>Olá,</Title>
        </ContainerTitle>

        <ContainerSubtitle>
          <Subtitle>Logue por e-mail</Subtitle>
        </ContainerSubtitle>

        <ContainerInputs>
          <FormikProvider value={formik}>
            <Input
              name="email"
              placeholder="Digite aqui seu e-email"
              onChangeText={formik.handleChange('email')}
              value={formik.values.email}
              returnKeyType="next"
            />
            {formik.touched.email && formik.errors.email && (
              <ErrorText>{formik.errors.email}</ErrorText>
            )}

            <Input
              name="password"
              placeholder="Digite aqui sua senha"
              onChangeText={formik.handleChange('password')}
              value={formik.values.password}
              secureTextEntry
            />

            {formik.touched.password && formik.errors.password && (
              <ErrorText>{formik.errors.password}</ErrorText>
            )}
          </FormikProvider>
        </ContainerInputs>

        <View style={{ marginTop: 20 }}>
          <Button title="Acessar" onPress={formik.handleSubmit} />
        </View>

        <ContainerTextResetPassword>
          <TextResetPassword>Esqueci minha senha</TextResetPassword>
        </ContainerTextResetPassword>
      </Container>
    </TouchableWithoutFeedback>
  );
}
