/**
 * @author RajaBose
 * @description Native modules expception handler to log exception which is responsible for app crash.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import {setNativeExceptionHandler} from 'react-native-exception-handler';

setNativeExceptionHandler((exceptionString) => {
    // This is your custom global error handler
    // You do stuff likehit google analytics to track crashes.
    // or hit a custom api to inform the dev team.
    //NOTE: alert or showing any UI change via JS
    //WILL NOT WORK in case of NATIVE ERRORS.
  });