/**
 * @author RajaBose
 * @description Http request call for singin services using axios client.
 * Bizongo (SmartPaddle pvt ltd)
 * http://github.com/bizongo/qc-mobile-app/
 */

import axios from "axios";
import React from "react";
import DATA from "./constant";

export const registerUser = axios.create({
  url: DATA.URL,
  headers: { "Content-Type": "application/json" }
});

export const signUser = axios.create({
  baseURL: DATA.URL,
  headers: { "Content-Type": "application/json" }
});

export const signOutUser = axios.create({
  baseURL: DATA.URL,
  headers: { "Content-Type": "application/json" }
});
