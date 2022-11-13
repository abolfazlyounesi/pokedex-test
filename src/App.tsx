import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { appStore, appStorePersistor } from "./state/store";
import AppRouter from "./navigation/router";

function App() {
  return (
    <Provider store={appStore}>
      <PersistGate persistor={appStorePersistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
