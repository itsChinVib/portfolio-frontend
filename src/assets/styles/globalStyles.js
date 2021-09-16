/**
 * Global Style Overrides
 */
export const styleOverrides = {
  typography: {
    fontFamily: 'Quicksand',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
        body: {
          fontFamily: 'Quicksand',
        },
      },
    },
    MuiTypography: {
      root: {
        fontFamily: 'Quicksand',
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 8,
      },
    },
    MuiButton: {
      label: {
        alignItems: 'center',
        textTransform: 'none',
      },
    },
    MuiListItem: {
      root: {
        borderRadius: 8,
      },
    },
  },
};
