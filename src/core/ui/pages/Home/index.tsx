import HomeContainer from 'core/ui/container/Home';
import React, { ReactElement } from 'react';
import { HomeProps } from './props';

export default function Home({}: HomeProps): ReactElement {
  return (
    <>
      <HomeContainer></HomeContainer>
    </>
  );
}
