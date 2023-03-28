/* eslint-disable @typescript-eslint/no-unused-vars */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { AdditionalInfo, createUserDocumentFromAuth, createAuthUserFromEmailAndPassword ,signInUserWithEmailAndPassword, UserData, getCurrentUser, signOutUser } from "@/utils/firebase/firebase.utils";



export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

type UserSignIn = {
    email: string;
    password: string
}

type UserSignUp = {
    email: string;
    password: string;
    additonalDetails: AdditionalInfo
}

export const userSignInAsync = createAsyncThunk('user/sign-in', async ({email, password}: UserSignIn, thunkAPI) => {
    const userCredential  = await signInUserWithEmailAndPassword(email, password);
    if (userCredential) {
        const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');

        return userSnapshot?.data();
    }
})

export const userSignUpAsync = createAsyncThunk('user/sign-up', async ({email, password, additonalDetails}: UserSignUp, thunkAPI) => {
    const userCredentials = await createAuthUserFromEmailAndPassword(email, password);
    if (userCredentials) {
         await createUserDocumentFromAuth(userCredentials?.user, 'users', additonalDetails);
    }
})

export const userCheckAsync = createAsyncThunk('user/check-user', async (_undefined,thunkAPI) => {
    const userObj = await getCurrentUser();
    if (userObj) {
      const userSnapshot = await createUserDocumentFromAuth(userObj, 'users');

      return userSnapshot?.data();
    }
})

export const userSignOutAsync = createAsyncThunk('user/signout-user', async (_undefined, thunkAPI) => {
    await signOutUser();
})


export const UserSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(userSignInAsync.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(userSignInAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                 state.currentUser = action.payload as unknown as UserData;
            }  
        })
        builder.addCase(userSignInAsync.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.error = action.payload as Error;
            }else {
                state.error = action.error as Error;
            }
        })
        builder.addCase(userSignUpAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userSignUpAsync.fulfilled, (state, action) => {
            state.isLoading = false;
        })
        builder.addCase(userSignUpAsync.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.error = action.payload as Error;
            }else {
                state.error = action.error as Error;
            }
        })
        builder.addCase(userCheckAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userCheckAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.currentUser = action.payload as unknown as UserData;
            } 
        })
        builder.addCase(userCheckAsync.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.error = action.payload as Error;
            }else {
                state.error = action.error as Error;
            }
        })
        builder.addCase(userSignOutAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(userSignOutAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currentUser = null;
        })
        builder.addCase(userSignOutAsync.rejected, (state, action) => {
            state.isLoading = false;
            if (action.payload) {
                state.error = action.payload as Error;
            }else {
                state.error = action.error as Error;
            }
        })
    },
})


export const UserReducer = UserSlice.reducer;