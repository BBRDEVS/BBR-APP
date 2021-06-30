import colors from 'core/ui/styles/colors';
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native';
import { AnswerBalloonProps } from './props';

export default function BalloonAnswer({ title }: AnswerBalloonProps): ReactElement {
    return (
        <View 
            style={{
                backgroundColor: colors.bluePrimary,
                borderRadius: 30,
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 17,
                paddingBottom: 18
            }}
        >
            <Text
                style={{
                    color: colors.white,
                    fontSize: 16
                }}
            >{title}</Text>
        </View>
    );
  }