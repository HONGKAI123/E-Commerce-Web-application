import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { presistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; //delay render a little to make sure redux-persist finished hydration(get state data from storage )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* we can add loading components to loading prop */}
    <PersistGate loading={null} persistor={presistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
