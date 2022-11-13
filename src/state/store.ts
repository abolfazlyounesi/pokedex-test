import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AppReducer } from "./app.reducer";

/**
* using redux-persist to keep a part of the state of app local storage to be able 
* to use it for initialize the data.
* also, we are using it to keep the users data locally on this project. so they will not loose their data
* by passing the names of the slices to the whiteList, we save them locally.
*/

const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
  whitelist: ["users"]
};

const persistedRootReducer = persistReducer(persistConfig, AppReducer);

export const appStore = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const appStorePersistor = persistStore(appStore);
export type AppDispatch = typeof appStore.dispatch;
export type AppState = ReturnType<typeof appStore.getState>;

// this function is been used for testing purposes and simulates the store
export const getRootStateMock = (): AppState => ({
  _persist: {
    rehydrated: true,
    version: 1
  },
  users: {
    currentUser: "",
    entities: {},
    ids: []
  },
  data: [],
  types: {
    selected: "",
    data: []
  }
});
