import React, { ReactElement, useEffect } from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';

import { ChatProps } from './props';
import SendMessageAreaComponent from 'core/ui/components/SendMessageArea';

import { chatSelectorState } from 'core/data/atoms/selectors/chatSelectors';
import { useRecoilValue } from 'recoil';
import { ScrollView } from 'react-native-gesture-handler';

export interface Title {
  value: string
}
export function BaloonMessage(props: Title): ReactElement {
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

export function BaloonResponse(props: Title): ReactElement {
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

  const fakeQuestions = [
    { id: 1, question: 'Ao falarmos de comidas,em qual verbo você pensa?' },
    { id: 2, question: 'Digite o nome de uma comida' },
    { id: 3, question: 'Digite o nome de uma bebida' },
  ]

  useEffect(() => {
    console.log('MENSAGEM:', chat)
  }, [chat])

  return (
    <Container>
      <ScrollView style={{ marginHorizontal: 20 }}>

        {

          fakeQuestions.map(ask =>
            chat.map(item => {
              if (item.id === ask.id) {
                return (
                  <View>
                    <BaloonMessage value={ask.question} />
                    <BaloonResponse value={item.message} />
                  </View>
                )
              }
            })
          )
        }
      </ScrollView>
      <SendMessageAreaComponent />

    </Container>
  );
}
