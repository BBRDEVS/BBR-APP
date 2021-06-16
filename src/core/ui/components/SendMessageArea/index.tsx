import React, { ReactElement, useState } from 'react';

import { Text, TextInput, Button, TouchableOpacity, Image, View } from 'react-native';
import { Container, InputText, SendMessageButton } from './styles';
import sendIcon from '../../assets/images/icons/send_icon.png';
import { chatSelectorState } from 'core/data/atoms/selectors/chatSelectors';
import { chatState } from 'core/data/atoms/selectors';

import { useRecoilState } from 'recoil';
import { Formik } from 'formik';


function SendMessageAreaComponent(): ReactElement {
  const [chatMessage, setChatMessage] = useRecoilState(chatState);
  const [countMessage, setCountMessage] = useState(0);
  return (
    <Container>
      <Formik
        initialValues={{ message: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (

          <View style={{
            display: 'flex',
            flexDirection: 'row',
            paddingBottom: 10
          }}>
            <InputText
              placeholder="Digite aqui sua mensagem"
              onChangeText={handleChange('message')}
              onBlur={handleBlur('message')}
              value={values.message} />
            <TouchableOpacity
              onPress={() => {
                setCountMessage(countMessage + 1);
                setChatMessage([...chatMessage, {message: values.message, id: countMessage }]);
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
    </Container >
  );
}

export default SendMessageAreaComponent;
