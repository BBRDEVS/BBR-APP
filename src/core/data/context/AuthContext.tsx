import React, {
  createContext,
  ReactElement,
  useCallback,
  useState,
} from 'react';
import { useNavigation } from '@react-navigation/native';

import { navigate } from '../../../routes';

export const AuthContext = createContext({});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default function AuthProvider({ children }: Props): ReactElement {
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(({ email, password }) => {
    setLoading(true);
    navigate('MainHomeNavigation');
  }, []);

  return (
    <AuthContext.Provider value={{ loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
