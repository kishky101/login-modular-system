import {combineReducers} from '@reduxjs/toolkit'
//import { UserReducer } from './reducers/user/user.reducer'
import { UserReducer } from './reducers/user/user.reducerRT'

export const RootReducer = combineReducers({
    user: UserReducer
})