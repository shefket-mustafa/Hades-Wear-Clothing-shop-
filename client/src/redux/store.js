import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"
import authReducer from "./slices/authSlice"
import itemDetailsReducer from "./slices/itemDetailsSlice"
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
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    itemDetails: itemDetailsReducer
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
    //This middleware is applied to ignore these functions that that redux-persist is dispatching under the hood.
    //The browser doesnt like them as an action should not dispatch a function but as it is from the library and not ours we can
    //ignore the warning
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
             // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})

export const persistor = persistStore(store)