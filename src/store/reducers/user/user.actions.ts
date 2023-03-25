import { USERTYPES } from "./user.types";
import { createAction } from "@/utils/reducer/reducer.utils";
import { AdditionalInfo, createUserDocumentFromAuth, createAuthUserFromEmailAndPassword ,signInUserWithEmailAndPassword, UserData } from "@/utils/firebase/firebase.utils";
import {ThunkAction} from 'redux-thunk';
import { AnyAction } from "redux";
import { RootState } from "@/store/store.utils";



//export const setCurrentUser = (user: UserData) => createAction(USERTYPES.SET_CURRENT_USER, user)

export const userSignInStart = () => createAction(USERTYPES.USER_SIGNIN_START);

export const userSignInSuccess = (user: UserData) => createAction(USERTYPES.USER_SIGNIN_SUCCESS, user);

export const userSignInFailed = (error: Error) => createAction(USERTYPES.USER_SIGNIN_FAILED, error);

export const userSignUpStart = () => createAction(USERTYPES.USER_SIGNUP_START);

export const userSignUpSuccess = () => createAction(USERTYPES.USER_SIGNUP_SUCCESS);

export const userSignUpFailed = (error: Error) => createAction(USERTYPES.USER_SIGNUP_FAILED, error);



export const userSignInAsync = (email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch): Promise<void> => {
    dispatch(userSignInStart())

    try {
        const userCredential  = await signInUserWithEmailAndPassword(email, password);
        if (userCredential) {
          const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');
          if (userSnapshot) {
            dispatch(userSignInSuccess(userSnapshot.data()))
          }
        }  
    } catch (error) {
        dispatch(userSignInFailed(error as Error))
    }
}

export const userSignUpAsync = (email: string, password: string, additonalDetails: AdditionalInfo): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch(userSignUpStart())

  try {
  const userCredentials = await createAuthUserFromEmailAndPassword(email, password);
  if (userCredentials) {
    const userSnapshot = await createUserDocumentFromAuth(userCredentials?.user, 'users', additonalDetails);
    if (userSnapshot) {
      dispatch(userSignUpSuccess()) 
      dispatch(userSignInAsync(email, password))
    }
  }
  
  } catch (error) {
    dispatch(userSignUpFailed(error as Error))
  }

}




// try {
//   const userCredentials = await createAuthUserFromEmailAndPassword(email, password);
//   if (userCredentials) {
//     const userSnapshot = await createUserDocumentFromAuth(userCredentials?.user, 'users', additonalDetails);
//     if (userSnapshot) {
//       console.log(userSnapshot)
//     }
//   }
  
// } catch (error) {
//   console.log(error)
// }