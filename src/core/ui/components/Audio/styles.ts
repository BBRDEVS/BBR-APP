import styled from 'styled-components/native';
import colors from "core/ui/styles/colors";

interface ButtonPlayProps {
  play?: boolean
  listen?: boolean
}

export const Container = styled.View``

export const ContainerContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 52px;
  background: ${colors.grayLight};
  margin: 30px 0;
  padding: 0 20px;
`

export const Placeholder = styled.Text`
  color: ${colors.bluePrimary};
  font-size: 16px
`

export const ButtonPlay = styled.Pressable<ButtonPlayProps>`
  align-items: center;
  justify-content: center;
  background: ${props => props.play ? colors.blueSecondary : "transparent"};
  border: 5px solid ${props => props.listen ? colors.bluePrimary : colors.blueSecondary};
  height: 44px;
  width: 44px;
  border-radius: 22px;
`

export const ContainerProgressBarAudio = styled.View`
  background: #ccc;
  height: 4px;
  justify-content: center;
  align-items: center;
  width: 200px;
`

export const ProgressBarAudio = styled.View`
  background: ${colors.white};
  height: 4px;
`

export const ViewBarWrapper = styled.View`
  align-self: stretch;
`



