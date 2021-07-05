import React, { useState, useCallback, useEffect, ReactElement } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

const iconBBR = require('../../assets/images/logo.png');

export default function Chat({ }): ReactElement {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'Quando pensa em uma comida, qual verbo você pensa?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ])
      }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>  GiftedChat.append(previousMessages, messages))
        //console.log('MESSAGE:', messages)
     /*   for (let index = 1; index <= 10; index++) {
          // const element = array[index];
          console.log('INDEEEX:', index);
           setMessages(previousMessages => GiftedChat.append(previousMessages, {
            _id: index,
            text: `Diga ${index} comidas`,
            createdAt: new Date(),
            user: {
                _id: index * 2,
                name: 'BBR',
                avatar: iconBBR,
            },
        },)) */
       

    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}