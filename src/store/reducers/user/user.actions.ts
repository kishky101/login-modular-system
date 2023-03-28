 import { USERTYPES } from "./user.types";
// import { createAction } from "@/utils/reducer/reducer.utils";
// import { AdditionalInfo, createUserDocumentFromAuth, createAuthUserFromEmailAndPassword ,signInUserWithEmailAndPassword, UserData, getCurrentUser, signOutUser } from "@/utils/firebase/firebase.utils";
// import {ThunkAction} from 'redux-thunk';
// import { AnyAction } from "redux";
// import { RootState } from "@/store/store.utils";



// //export const setCurrentUser = (user: UserData) => createAction(USERTYPES.SET_CURRENT_USER, user)

// export const userSignInStart = () => createAction(USERTYPES.USER_SIGNIN_START);

// export const userSignInSuccess = (user: UserData) => createAction(USERTYPES.USER_SIGNIN_SUCCESS, user);

// export const userSignInFailed = (error: Error) => createAction(USERTYPES.USER_SIGNIN_FAILED, error);

// export const userSignUpStart = () => createAction(USERTYPES.USER_SIGNUP_START);

// export const userSignUpSuccess = () => createAction(USERTYPES.USER_SIGNUP_SUCCESS);

// export const userSignUpFailed = (error: Error) => createAction(USERTYPES.USER_SIGNUP_FAILED, error);

// export const userSignOutStart = () => createAction(USERTYPES.USER_SIGNOUT_START);

// export const userSignOutSuccess = () => createAction(USERTYPES.USER_SIGNOUT_SUCCESS);

// export const userSignOutFailed = (error: Error) => createAction(USERTYPES.USER_SIGNOUT_FAILED, error);



// export const userSignInAsync = (email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch): Promise<void> => {
//     dispatch(userSignInStart())

//     try {
//         const userCredential  = await signInUserWithEmailAndPassword(email, password);
//         if (userCredential) {
//           const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');
//           if (userSnapshot) {
//             dispatch(userSignInSuccess(userSnapshot.data()))
//           }
//         }  
//     } catch (error) {
//         dispatch(userSignInFailed(error as Error))
//     }
// }

// export const userSignUpAsync = (email: string, password: string, additonalDetails: AdditionalInfo): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
//   dispatch(userSignUpStart())

//   try {
//   const userCredentials = await createAuthUserFromEmailAndPassword(email, password);
//   if (userCredentials) {
//     const userSnapshot = await createUserDocumentFromAuth(userCredentials?.user, 'users', additonalDetails);
//     if (userSnapshot) {
//       dispatch(userSignUpSuccess()) 
//       dispatch(userSignInAsync(email, password))
//     }
//   }
  
//   } catch (error) {
//     dispatch(userSignUpFailed(error as Error))
//   }

// }


// export const userCheckAsync = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
//   try {
//     const userObj = await getCurrentUser();
//     if (userObj) {
//       const userSnapshot = await createUserDocumentFromAuth(userObj, 'users');
//       //console.log(userSnapshot?.data())
//       if (userSnapshot) {
//         dispatch(userSignInSuccess(userSnapshot?.data()))
//       }
//     }
//   } catch (error) {
//     dispatch(userSignInFailed(error as Error))
//   }
// }

// export const userSignOutAsync = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
//   dispatch(userSignOutStart())
//   try {
//     await signOutUser();
//     dispatch(userSignOutSuccess())
//   } catch (error) {
//     dispatch(userSignOutFailed(error as Error))
//   }
// }



