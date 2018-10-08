/**
 * Asyncstorage class to store the session, token in the file.
 * @author RajaBose
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import { AsyncStorage } from "react-native";

export const saveToken = async (key, value) => {
  try {
    const jsonItem = await AsyncStorage.setItem(key, JSON.stringify(value));
    return jsonItem;
  } catch (error) {
    throw error;
  }
};

export const removeToken = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw error;
  }
};

export const getToken = async key => {
  try {
    const retrieveItem = await AsyncStorage.getItem(key);
    const item = JSON.parse(retrieveItem);
    return item;
  } catch (error) {
    throw error;
  }
};
