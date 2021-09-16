import { combineReducers } from "redux";
import { settingsReducer } from "./settings";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const settingsConfig = {
	...persistConfig,
	key: "settings",
};

/* Combine all reducers in the application */
const appReducer = combineReducers({
	settings: persistReducer(settingsConfig, settingsReducer),
});

const applicationReducer = (state, action) => {
	return appReducer(state, action);
};

export default applicationReducer;
