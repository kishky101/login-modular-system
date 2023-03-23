import {combineReducers} from 'redux'
import { UserReducer } from './reducers/user/user.reducer'

export const RootReducer = combineReducers({
    user: UserReducer
})