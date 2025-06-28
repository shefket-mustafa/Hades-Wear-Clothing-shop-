import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from "redux-persist"
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
  } from 'redux-persist';

//combining the reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
});

//config: key for local storage, whitelist is telling what we will persist
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["cart"]
}

//wrapping the reducer with persisting
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
             // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})

export const persistor = persistStore(store)