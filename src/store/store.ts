// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["category"], // slices you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Create single store instance
export const stores = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // needed for redux-persist
      }),
  });
};

const store = stores()

export const persistor = persistStore(store);

// ✅ Types for use in hooks.ts
export type AppStore = ReturnType<typeof stores>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
