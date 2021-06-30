interface DataAudio {
  id: number
  audio: string
}

export interface AudioProps  {
  isLoggingIn: boolean;
  recordSecs: number;
  recordTime: string;
  currentPositionSec: number;
  currentDurationSec: number;
  playTime: string;
  duration: string;
  finished: boolean
  onStartRecord: () => void
  onStopRecord: () => void
  onStartPlay: () => void
  playWidth: number
  data: DataAudio[]
}



