import React, { ReactElement } from 'react';
import { Text, Button, TouchableOpacity, Image } from 'react-native';

import { Container, InputText, SendMessageButton } from './styles';

export default function SendMessageAreaComponent(): ReactElement {
  return (
   <Container>
    <InputText placeholder="Digite aqui sua mensagem" />
    <TouchableOpacity
        onPress={() => console.log('clucouu')}
      >
        <SendMessageButton>
          <Image style={{height: 120}}  source={require('../../assets/images/icons/icon_send.svg')} />
        </SendMessageButton>
      </TouchableOpacity>
    
   </Container>
  );
}
