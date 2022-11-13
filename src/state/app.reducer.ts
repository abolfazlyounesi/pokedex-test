import { combineReducers } from "@reduxjs/toolkit";
import DataReducer from "./slices/data.slice";
import TypesReducer from "./slices/types.slice";
import UsersReducer from "./slices/user.slice";

/**
 * defining the root reducer of the app
 */

export const AppReducer = combineReducers({
  data: DataReducer,
  types: TypesReducer,
  users: UsersReducer
});
