import {createSelector} from 'reselect';

import { RootState } from '@/store/store.utils';

import { UserState } from './user.reducerRT';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
)

export const selectIsLoading = createSelector(
    [selectUserReducer],
    (user) => user.isLoading
)

export const selectSignupSuccess = createSelector(
    [selectUserReducer],
    (user) => user.signupSuccess
)

export const selectError = createSelector(
    [selectUserReducer],
    (user) => user.error
)