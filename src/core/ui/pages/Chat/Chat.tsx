import React, { ReactElement, useEffect } from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';

import { ChatProps } from './props';
import SendMessageAreaComponent from 'core/ui/components/SendMessageArea';

import { chatSelectorState } from 'core/data/atoms/selectors/chatSelectors';
import { useRecoilValue } from 'recoil';

export function BaloonMessage(props): ReactElement {
  return (
    <View style={{
      backgroundColor: '#09164F',
      height: 56,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5, 
      paddingBottom: 6,
      minWidth: 82,
      marginBottom: 32,
      borderRadius: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ color: '#fff' }}>{props.value}</Text>
    </View>
  )
};

export function BaloonResponse(props): ReactElement {
  return (
    <View style={{
      backgroundColor: '#F5F5F5',
      height: 56,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5, 
      paddingBottom: 6,
      minWidth: 82,
      marginBottom: 32,
      borderRadius: 56,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{ color: '#000' }}>{props.value}</Text>
    </View>
  )
};
export default function Chat({ }: ChatProps): ReactElement {
  const chat = useRecoilValue(chatSelectorState);

  useEffect(() => {
    console.log('MENSAGEM:', chat[0])
  }, [chat])

  return (
    <Container>
      {
        chat[0] === undefined ? <View>
          <BaloonResponse value={'Ao falarmos de comidas,em qual verbo você pensa?'} />
        </View> : false
      }
      <SendMessageAreaComponent />
      {
        chat.length !== 0 ? chat.map(message => <BaloonMessage value={message} />) : false
      }
    
    </Container>
  );
}
