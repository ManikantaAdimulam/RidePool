import React from "react";
import { combineReducers } from "redux";
import { LoginReducer } from "./Reducer";

export const rootReducer = () => {
  return combineReducers({ LoginReducer });
};
