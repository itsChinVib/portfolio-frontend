import { createTheme } from '@material-ui/core/styles';

import { themeLight } from './lightTheme';
import { themeDark } from './darkTheme';
import { styleOverrides } from './globalStyles';

/**
 * Light Mui Theme
 * @returns MuiTheme Object
 */
export const lightTheme = () =>
  createTheme({ ...themeLight({ ...styleOverrides }) });

/**
 * Dark Mui Theme
 * @returns MuiTheme Object
 */
export const darkTheme = () =>
  createTheme({ ...themeDark({ ...styleOverrides }) });
