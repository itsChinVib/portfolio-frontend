import { actionTypes } from '../actionTypes';

/**
 * Toggle Theme Action
 */
export const toggleTheme = () => dispatch => {
  dispatch({ type: actionTypes.TOGGLE_THEME });
};

/**
 * Toggle Show Certificate Action
 */
export const toggleShowCerti = () => dispatch => {
  dispatch({ type: actionTypes.TOGGLE_SHOW_CERTI });
};
