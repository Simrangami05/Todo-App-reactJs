// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers/index";

// const store = configureStore(rootReducer);

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const store = configureStore({ reducer: rootReducer });

export default store;
