import React, { createContext, useState, useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Appearance, AppearanceProvider } from 'react-native-appearance';
import { ThemeProps } from './props';

import lightTheme from './light';
import darkTheme from './dark';

const defaultMode = Appearance.getColorScheme() || 'light';

const ThemeContext = createContext({
  mode: defaultMode,
  setMode: (mode: any) => console.log(mode),
});

export const useTheme = () => useContext(ThemeContext);

const ManageThemeProvider = ({ children }: ThemeProps) => {
  const [themeState, setThemeState] = useState(defaultMode);

  const setMode = (mode: any) => {
    setThemeState(mode);
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setThemeState(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: themeState, setMode }}>
      <ThemeProvider
        theme={themeState === 'dark' ? darkTheme.theme : lightTheme.theme}>
        <>
          <StatusBar
            barStyle={themeState === 'dark' ? 'dark-content' : 'light-content'}
          />
          {children}
        </>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeManager = ({ children }: ThemeProps) => (
  <AppearanceProvider>
    <ManageThemeProvider>{children}</ManageThemeProvider>
  </AppearanceProvider>
);

export default ThemeManager;
