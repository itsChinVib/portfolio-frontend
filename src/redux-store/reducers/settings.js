import { actionTypes } from '../actionTypes';

/**
 * Settings Redux Store Initial State
 */
const settingsInitialState = {
  uiTheme: 'dark',
  showCertificates: false,
};

/**
 * Settings Reducer
 */
export const settingsReducer = (
  state = settingsInitialState,
  { type, payload, ...restArgs }
) => {
  switch (type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        uiTheme: state.uiTheme === 'light' ? 'dark' : 'light',
      };
    case actionTypes.TOGGLE_SHOW_CERTI:
      return {
        ...state,
        showCertificates: !state.showCertificates,
      };
    default:
      return state;
  }
};
