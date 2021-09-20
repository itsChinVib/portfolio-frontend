import _ from 'lodash';

/**
 * Light Palette
 */
const lightPalette = {
  primary: {
    main: '#011627', // Blue
  },
  secondary: {
    main: '#2ec4b6', // Green
  },
  common: {
    white: '#ffffff', // White
    black: '#011627',
  },
};

/**
 * Light Theme Styles
 * @param {object} styleOverrides Global default overrides
 * @returns {object} theme style overrides
 */
export const themeLight = styleOverrides =>
  _.merge(_.clone({ ...styleOverrides }), {
    type: 'light',
    palette: lightPalette,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: lightPalette.common.black,
            backgroundColor: lightPalette.common.white,
          },
        },
      },
      MuiPaper: {
        root: { backgroundColor: lightPalette.common.white },
      },
      MuiIconButton: {
        root: {
          color: lightPalette.secondary.main,
          '&:hover': {
            backgroundColor: lightPalette.common.black,
          },
        },
      },
    },
  });
