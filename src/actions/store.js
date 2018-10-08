/**
 * @author RajaBose
 * @description Redux store setting to map the reducers with the dipatch actions which is described in action/index.js.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import { createStore, compose, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

//Import the user reducer to map the thunk middleware with the thunk reducer functions
import reducers from "./UserReducer";

const loggerMiddleWare = createLogger();

const createStoreMiddleWare = applyMiddleware(thunk,loggerMiddleWare)(createStore);

const store = createStoreMiddleWare(reducers);

export default store;
