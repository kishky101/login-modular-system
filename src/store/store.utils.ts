//import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './rootReducer';
//import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit'

export type RootState = ReturnType<typeof RootReducer>

// const middleware = [logger, thunk]
// const composeEnhancer = compose(applyMiddleware(...middleware)) 

// export const store = createStore(RootReducer, undefined, composeEnhancer);

// export type AppDispatch = typeof store.dispatch;

//export type R = ReturnType<typeof store.getState>

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//     Boolean
// );

export const store = configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(logger)
})