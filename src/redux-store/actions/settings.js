import { actionTypes } from '../actionTypes';

/**
 * Toggle Theme Action
 */
export const toggleTheme = () => dispatch => {
  dispatch({ type: actionTypes.TOGGLE_THEME });
};
