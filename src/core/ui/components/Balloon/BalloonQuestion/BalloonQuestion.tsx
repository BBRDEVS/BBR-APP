import colors from 'core/ui/styles/colors';
import React, { ReactElement } from 'react'
import { View, Text } from 'react-native';
import { QuestionBalloonProps } from './props';

export default function BalloonQuestion({ title }: QuestionBalloonProps): ReactElement {
    return (
        <View 
            style={{
                backgroundColor: colors.grayLight,
                borderRadius: 30,
                paddingLeft: 25,
                paddingRight: 25,
                paddingTop: 17,
                paddingBottom: 18
            }}
        >
            <Text
                style={{
                    color: colors.black,
                    fontSize: 16
                }}
            >{title}</Text>
        </View>
    );
  }