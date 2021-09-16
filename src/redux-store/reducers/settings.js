import { actionTypes } from "../actionTypes";

/**
 * Settings Redux Store Initial State
 */
const settingsInitialState = {
	uiTheme: "light",
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
				uiTheme: state.uiTheme === "light" ? "dark" : "light",
			};
		default:
			return state;
	}
};
