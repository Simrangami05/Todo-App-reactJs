// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/index";

// const store = configureStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

// const store = configureStore({ reducer: rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() });

const store = configureStore({ reducer: rootReducer });
export default store;
