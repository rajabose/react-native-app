//Import the actions types
/**
 * @author RajaBose
 * @description action creator file which have all the actions functions regarding user login component.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import * as ACTIONS from "./actionTypes";
import * as services from "../services/authApi";
import DATA from "../services/constant";
import * as STOREMANAGER from "../utility/storemanger";

//User Login action creator function
export const login = userDetails => {
  return async dispatch => {
    //Make API call for User data
    try {
      //debugger;
      let responseData = await services.signUser
        .post("/login", userDetails)
        .then(response => {
          return response;
        })
        .catch(error => {
          throw "Network error";
        });

      if (responseData.status === 200) {
        STOREMANAGER.saveToken(DATA.USERTOKEN, responseData.data.token);

        setTimeout(() => {
          dispatch({ type: ACTIONS.USER_LOGIN, data: responseData.data });
        }, 200);
      } else {
        throw "Bad Request";
      }
    } catch (error) {
      setTimeout(() => {
        dispatch({ type: ACTIONS.NO_ACTION, data: {} });
      }, 200);
    }
  };
};

//User logout action creator function
export function logout() {
  return dispatch => {
    setTimeout(() => {
      const responseData = {};
      dispatch({ type: ACTIONS.USER_LOGOUT, data: responseData });
    }, 200);
  };
}

//User register action creator function
export function register() {
  return dispatch => {
    //Make API call for the user registration from authservices
    const responseData = {};
    setTimeout(() => {
      const responseData = {};
      dispatch({ type: ACTIONS.USER_REGISTER, data: responseData });
    }, 200);
  };
}

//Actions for Swiping the login and register component in the home page when token is not set.
export function swipeComponent() {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ACTIONS.SWIPELOGINREGISTER });
    }, 200);
  };
}
