import React, { ReactElement } from 'react';
import { Text, TextInput, Button, TouchableOpacity, Image, View } from 'react-native';

import { Container, InputText, SendMessageButton } from './styles';

import sendIcon from '../../assets/images/icons/send_icon.png';
import { useRecoilState } from 'recoil';
import { chatSelectorState } from 'core/data/atoms/selectors/chatSelectors';
import { chatState } from 'core/data/atoms/selectors';

import { Formik } from 'formik';

function SendMessageAreaComponent(): ReactElement {
  const [message, setMessage] = useRecoilState(chatState);

  return (
    <Container>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (

          <View>
            <InputText
              placeholder="Digite aqui sua mensagem"
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message} />
            <TouchableOpacity
              onPress={() => {
                setMessage((message) => [
                  ...message,
                  values.message,
                ]);
                handleSubmit;
              }}
            >
              <SendMessageButton>
                <Image source={sendIcon} />
              </SendMessageButton>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </Container>
  );
}

export default SendMessageAreaComponent;
