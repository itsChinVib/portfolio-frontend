import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { lightTheme, darkTheme } from 'assets/styles/themes';
/**
 * Theme Wrapper component
 */
const ThemeWrapper = ({ children }) => {
  const theme = useSelector(({ settings }) => settings.uiTheme, shallowEqual);
  const themeObj = theme === 'light' ? lightTheme() : darkTheme();
  return (
    <ThemeProvider theme={themeObj}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
