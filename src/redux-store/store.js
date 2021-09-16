import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";

import reducer from "./reducers";

/**
 * Configure redux store
 */
const configureStore = initialState => {
	const middlewares = [thunkMiddleware];

	const enhancer =
		process.env.NODE_ENV === "development"
			? composeWithDevTools(applyMiddleware(...middlewares))
			: compose(applyMiddleware(...middlewares));

	return createStore(reducer, initialState, enhancer);
};

/**
 * Create Persisted Store
 */
const persistedStore = () => {
	let store = configureStore({});
	let persistor = persistStore(store);
	return { store, persistor };
};

export const { store, persistor } = persistedStore();
