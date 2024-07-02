import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

const persistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["auth"],
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;