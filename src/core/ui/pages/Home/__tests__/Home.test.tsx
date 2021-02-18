import React from 'react';
import { render } from '@testing-library/react-native';

import Home from '../index';

describe('Home', () => {
  it('should be able render home', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Chama nois chupeta')).toBeTruthy();
  });
});
