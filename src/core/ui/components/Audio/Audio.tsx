import React, { ReactElement } from 'react';
import Icon from 'react-native-vector-icons/Feather'

import {
  Container,
  ContainerContent,
  Placeholder,
  ButtonPlay,
  ContainerProgressBarAudio,
  ProgressBarAudio,
  ViewBarWrapper
} from './styles';

import { AudioProps } from './props';

export default function AudioComponent({
  duration,
  finished,
  onStartRecord,
  onStopRecord,
  onStartPlay,
  playWidth,
  data,
}: AudioProps): ReactElement {
  return (
    <Container>
      {
        finished ? (
          <ContainerContent>
            <Placeholder>{duration}</Placeholder>
              <ContainerProgressBarAudio>
                <ViewBarWrapper>
                  <ProgressBarAudio style={{ width: playWidth }} />
                </ViewBarWrapper>
              </ContainerProgressBarAudio>
            <ButtonPlay listen onPressIn={onStartPlay}>
              <Icon name="play" size={24} />
            </ButtonPlay>
          </ContainerContent>
        ) : (
          <ContainerContent>
            <Placeholder>Aperte para gravar o áudio</Placeholder>
            <ButtonPlay play onPressIn={onStartRecord} onPressOut={onStopRecord}>
              <Icon name="mic" size={24} />
            </ButtonPlay>
          </ContainerContent>
        )
      }
    </Container>
  );
}
