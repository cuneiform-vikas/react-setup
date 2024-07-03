import { Tuple, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./rootReducer";
import { encryptTransform } from "redux-persist-transform-encrypt";
import { thunk } from "redux-thunk";
import { apiSlice } from "../modules/auth/redux/apiSlice";

const persistConfig: any = {
  key: "auth",
  storage,
  whitelist: ["auth"],
  transforms: [encryptTransform({ secretKey: "my-secret-key" })],
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  // middleware: () => new Tuple(thunk),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

const persistor: any = persistStore(store);

export { store, persistor };
