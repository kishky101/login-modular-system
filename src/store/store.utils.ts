import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './rootReducer';
import thunk from 'redux-thunk';

export type RootState = ReturnType<typeof RootReducer>

const middleware = [logger, thunk]
const composeEnhancer = compose(applyMiddleware(...middleware)) 

export const store = createStore(RootReducer, undefined, composeEnhancer);

export type AppDispatch = typeof store.dispatch;

//export type R = ReturnType<typeof store.getState>