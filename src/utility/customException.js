/**
 * @author RajaBose
 * @description Custom modules expception handler to log exception which is responsible for app crash.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */


import {
  setJSExceptionHandler,
  getJSExceptionHandler
} from "react-native-exception-handler";

const errorHandler = (error, isFatal) => {
  if (isFatal) {
    Alert.alert(
      "Unexpected error occurred",
      `
      Error: ${isFatal ? "Fatal:" : ""} ${e.name} ${e.message}

      We will need to restart the app.
      `,
      [
        {
          text: "Restart",
          onPress: () => {
            RNRestart.Restart();
          }
        }
      ]
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler);

const currentHandler = getJSExceptionHandler();
