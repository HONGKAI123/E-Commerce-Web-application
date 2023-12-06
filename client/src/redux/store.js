//store Cart details

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer); //embed persist into app, reducers will start to Persistence

export const store = configureStore({
  // reducer: persistedReducer,  //should sent persistedReducer as cart reducer
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let presistor = persistStore(store); //return a new persistor instance, when we refresh page, application will load correct state base on this instance
// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });
