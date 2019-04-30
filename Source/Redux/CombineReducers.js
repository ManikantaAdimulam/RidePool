import React from "react";
import { combineReducers } from "redux";
import { LoginReducer } from "./Reducer";
import { RideReducer } from "./RidesReducer";
export const rootReducer = () => {
  return combineReducers({ LoginReducer, RideReducer });
};
