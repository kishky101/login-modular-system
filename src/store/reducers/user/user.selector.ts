import {createSelector} from 'reselect';

import { RootState } from '@/store/store.utils';

import { UserState } from './user.reducer';

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (user) => user.currentUser
)