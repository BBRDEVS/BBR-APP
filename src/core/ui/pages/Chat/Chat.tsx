import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { Button, InteractionManager, SafeAreaView, Text, TextInput, View } from 'react-native';

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
  response: string;
}

export default function Chat({ }: ChatProps): ReactElement {
  const [message, setMessage] = useState([{ id: 0, title: 'Quando se pensa em comida, qual é o primeiro verbo que você pensa?' }]);
  const [countMessageUser, setCounterMessageUser] = useState(1);

  const formik = useFormik({
    initialValues: { message: '' },

    validationSchema: Yup.object().shape({
      message: Yup.string().required('Por favor, digite uma resposta'),
    }),

    onSubmit: (values) => {
      newMessageInState(values.message);
    }
  });

  useEffect(() => {
    console.log('ID:', countMessageUser)
  }, [])

  const newMessageInState = (inputText: string) => {
    let newMessage = { id: countMessageUser, response: inputText, title: '' };
    setMessage((previousMessage) => [...previousMessage, newMessage]);
    if (countMessageUser < 4) {
      axios.get(`http://192.168.0.251:3000/questions/${countMessageUser}`).then(response => {
        setTimeout(() => {
          return setMessage((previousMessage) => [...previousMessage, response.data]);
        }, 1000);
      }).catch(err => {
        console.log('Não foi possível carregar as perguntas');
        return err;
      });
    } else {
      setMessage((previousMessage) => [...previousMessage, { id: 99, title: 'Parabéns' }]);

    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container style={{ backgroundColor: colors.white }}>
        <ScrollView>
          {
            message.map((question: IPayloadQuestions, index) => {
              return (
                <>
                  {question.title !== '' ? <BallonQuestion key={index * 2} title={question.title} /> : null}
                  {question.response !== '' && question.response ? <BalloonAnswer key={countMessageUser + 1} title={question.response} /> : null}

                </>
              )
            })
          }

        </ScrollView>


          {
            countMessageUser < 4 
            ? <FormikProvider value={formik}>
            <TouchableOpacity
              onPress={() => {
                setCounterMessageUser(countMessageUser + 1);
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
  
          </FormikProvider> : <View><Text>Próxima lição</Text></View>
          }
        
      </Container>

    </SafeAreaView>

  );
}
