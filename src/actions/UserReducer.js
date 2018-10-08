/**
 * @author RajaBose
 * @description User reducer services to store data object with respect to use details in redux store.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import { combineReducers } from "redux";

//Import the actions from
import * as ACTIONS from "./actionTypes";

const userDataSet = { data: [], loading: false, loginPage: true, token: "" };

const userReducer = (state = userDataSet, action) => {
  let updatedState = state;
  switch (action.type) {
    case ACTIONS.USER_LOGIN:
      updatedState = {
        ...state,
        data: action.data,
        loading: false,
        loginPage: false,
        token: action.data.token
      };
      return updatedState;
    case ACTIONS.USER_LOGOUT:
      updatedState = {
        ...state,
        data: action.data,
        loading: false,
        loginPage: true,
        token: ""
      };
      return updatedState;
    case ACTIONS.USER_REGISTER:
      updateState = userDataSet;
      return updatedState;
    case ACTIONS.SWIPELOGINREGISTER:
      // state.loginPage = !state.loginPage;
      updatedState = {
        ...state,
        loginPage: !updatedState.loginPage
      };
      return updatedState;
    default:
      return updatedState;
  }
};

const reducers = combineReducers({
  userReducer
});

export default reducers;
