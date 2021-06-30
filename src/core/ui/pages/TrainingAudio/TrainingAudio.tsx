import React, { Component } from 'react';
import { Dimensions, Platform, SafeAreaView, FlatList } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';

import AudioComponent from "core/ui/components/Audio/Audio";

import { State } from './props'

import { ContainerTitle, Title } from './styles'

import audios from '../../../data/utils/audios.json'
import { permissionsAndroidForAudio } from "core/data/permissionsAndroidForAudio";

const screenWidth = Dimensions.get('screen').width;

export default class TraningAudio extends Component<any, State> {
  private dirs = RNFetchBlob.fs.dirs;

  private path = Platform.select({
    ios: 'hello.m4a',
    android: `${this.dirs.CacheDir}/hello.mp3`,
  });

  private audioRecorderPlayer: AudioRecorderPlayer;

  constructor(props: any) {
    super(props);
    this.state = {
      recordSecs: 0,
      recordTime: '00:00',
      currentPositionSec: 0,
      currentDurationSec: 0,
      playTime: '00:00',
      duration: '00:00',
      finished: true
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();
    this.audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5
  }

  private onStartRecord = async () => {
    if (Platform.OS === 'android') {
      await permissionsAndroidForAudio()
    }

    const audioSet: AudioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };

    console.log('audioSet', audioSet);
    //? Custom path
    // const uri = await this.audioRecorderPlayer.startRecorder(
    //   this.path,
    //   audioSet,
    // );

    //? Default path
    const uri = await this.audioRecorderPlayer.startRecorder(
        undefined,
        audioSet,
    );

    this.audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
      console.log('record-back', e);
      this.setState({
        recordSecs: e.currentPosition,
        recordTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
        ),
      });
    });
    console.log(`uri: ${uri}`);
  };

  private onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();
    this.audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
      finished: true
    });
    console.log(result);
  };

  private onStartPlay = async () => {
    console.log('onStartPlay');
    //? Custom path
    // const msg = await this.audioRecorderPlayer.startPlayer(this.path);

    //? Default path
    const msg = await this.audioRecorderPlayer.startPlayer();
    const volume = await this.audioRecorderPlayer.setVolume(1.0);
    console.log(`file: ${msg}`, `volume: ${volume}`);

    this.audioRecorderPlayer.addPlayBackListener((e: PlayBackType) => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        this.audioRecorderPlayer.stopPlayer();
      }
      this.setState({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: this.audioRecorderPlayer.mmssss(
            Math.floor(e.currentPosition),
        ),
        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  private onStopPlay = async () => {
    console.log('onStopPlay');

    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };

  public render() {
    let playWidth =
        (this.state.currentPositionSec / this.state.currentDurationSec) *
        (screenWidth - 56);

    if (!playWidth) {
      playWidth = 0;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <ContainerTitle>
            <Title>Insira em cada campo a frase que você quer enviar para o seu professor.</Title>
          </ContainerTitle>

          <FlatList
            data={audios}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <AudioComponent
                recordSecs={this.state.recordSecs}
                recordTime={this.state.recordTime}
                currentPositionSec={this.state.currentPositionSec}
                currentDurationSec={this.state.currentDurationSec}
                playTime={this.state.playTime}
                duration={this.state.duration}
                finished={this.state.finished}
                onStartRecord={this.onStartRecord}
                onStopRecord={this.onStopRecord}
                onStartPlay={this.onStartPlay}
                playWidth={playWidth}
                data={item}
              />
            )}
          />
        </SafeAreaView>
    );
  }
}
