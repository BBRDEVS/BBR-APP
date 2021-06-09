import styled from 'styled-components/native';
import colors from '../../styles/colors';

// export const Container = styled.View`
//   padding: 32px;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
// `;

// export const ContainerRevisionImage = styled.View`
//   justify-content: center;
//   align-items: center;
// `;

// export const RevisionImage = styled.Image``;

// export const TextHi = styled.Text`
//   left: 80px;
//   top: 20px;
// `;

// export const ContainerTitle = styled.View`
//   margin-top: 10px;
//   align-items: center;
//   justify-content: center;
// `;

// export const Title = styled.Text`
//   font-size: 12px;
// `;

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.white};
`;

export const Content = styled.View`
  padding-left: 10px;
`;

export const TitleCategory = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 15px;
`;
