import _ from 'lodash';

/**
 * Dark Palette
 */
const darkPalette = {
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
 * Dark Theme Styles
 * @param {object} styleOverrides Global default overrides
 * @returns {object} theme style overrides
 */
export const themeDark = styleOverrides =>
  _.merge(_.clone({ ...styleOverrides }), {
    type: 'dark',
    palette: darkPalette,
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            color: darkPalette.common.white,
            backgroundColor: darkPalette.common.black,
          },
        },
      },
      MuiPaper: {
        root: { backgroundColor: darkPalette.common.black },
      },
      MuiIconButton: {
        root: {
          color: darkPalette.secondary.main,
          '&:hover': {
            backgroundColor: darkPalette.common.white,
          },
        },
      },
    },
  });
