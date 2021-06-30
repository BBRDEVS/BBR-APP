import React, { ReactElement, useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, TextInput, View } from 'react-native';

import { Container, } from './styles';

import { ChatProps } from './props';
import BallonQuestion from 'core/ui/components/Balloon/BalloonQuestion';
import BalloonAnswer from 'core/ui/components/Balloon/BalloonAnswer';
import colors from 'core/ui/styles/colors';

import axios from 'axios';
import { number, string } from 'yargs';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

export interface IPayloadQuestions {
  id: number;
  title: string;
}

export default function Chat({ }: ChatProps): ReactElement {
  const [questionCounter, setQuestionCounter] = useState(0);
  const [listQuestion, setQuestionList] = useState([]);
  const [listAnswerStudent, setlistAnswerStudent] = useState([]);

  const formik = useFormik({
    initialValues: { message: '' },

    validationSchema: Yup.object().shape({
      message: Yup.string().required('Por favor, digite uma resposta'),
    }),

    onSubmit: (values) => {
      setlistAnswerStudent((listAnswerStudent) => [
        ...listAnswerStudent,
        values.message,
      ]);
    },
  });

  const loadQuestion = () => {
    setQuestionCounter(questionCounter + 1);
    axios.get(`http://10.0.2.2:3000/questions/${questionCounter}`)
      .then(question => {
        setQuestionList((listQuestion) => [
          ...listQuestion,
          question.data,
        ]);
      })
      .catch(err => console.log(`Error to retrieve question list ${err}`));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ backgroundColor: colors.white }}>
        <ScrollView>
          {
            listQuestion.length !== 0 ? listQuestion.map((question: IPayloadQuestions) => <BallonQuestion key={question.id} title={question.title} />) : <></>
          }
          {
            listAnswerStudent.length !== 0 ? listAnswerStudent.map((answer, i) => <BalloonAnswer key={i} title={answer} />) : <></>

          }
        </ScrollView>

        <TouchableOpacity
          onPress={() => {
            loadQuestion();
            formik.handleSubmit();
          }}
        >
          <View
            style={{
              backgroundColor: colors.blueSecondary,
              width: 45,
              height: 45,
              borderRadius: 100,
              justifyContent: 'center',
              
            }}
          >
            <Text>
              send
            </Text>
          </View>
        </TouchableOpacity>

        <FormikProvider value={formik}>
          <TextInput
            value={formik.values.message}
            onChangeText={formik.handleChange('message')}
            returnKeyType="next"
            style={{
              backgroundColor: colors.grayLight,
              borderColor: colors.black,
              borderWidth: 1,
              borderRadius: 8,
              paddingLeft: 15,
              paddingRight: 15,
              width: `90%`
            }}
            placeholder="Digite aqui sua mensagem"
          />
          {formik.touched.message && formik.errors.message && (
            <Text>{formik.errors.message}</Text>
          )}

        </FormikProvider>
      </Container>
    </SafeAreaView>

  );
}
