import React, { ReactElement } from 'react';

import AuthProvider from './AuthContext';

interface AppProviderProps {
  children: JSX.Element[] | JSX.Element;
}

export default function AppProvider({
  children,
}: AppProviderProps): ReactElement {
  return <AuthProvider>{children}</AuthProvider>;
}
