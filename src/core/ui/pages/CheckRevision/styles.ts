import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface DescroptionDegree {
  fontBold?: boolean;
}

export const Container = styled.View`
  padding: 32px;
  flex: 1;
  justify-content: space-between;
  background: ${colors.bluePrimary};
`;

export const ContainerContentRevision = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerDegree = styled.View``;

export const Degree = styled.Image``;

export const Men = styled.Image``;

export const TextHi = styled.Text`
  left: 86px;
  bottom: 105px;
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerTitle = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
`;

export const ContainerTitleDegree = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextDegree = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold;
`;

export const ContainerDescriptionDegree = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const DescroptionDegree = styled.Text<DescroptionDegree>`
  color: ${colors.white};
  text-align: center;
  font-size: 20px;
  font-weight: ${(props) => (props.fontBold ? 'bold' : 'normal')};
`;

export const ContainerCircularProgress = styled.View`
  flex-direction: row;
`;
