import React from 'react';
import { render } from '@testing-library/react-native';

import SignIn from '../SignIn';

describe('SignIn', () => {
  it('should be able render SignIn', () => {
    const { getByText } = render(<SignIn />);

    expect(getByText('Chama nois chupeta')).toBeTruthy();
  });
});
