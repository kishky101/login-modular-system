  import { USERTYPES } from "./user.types";
  import { createAction } from "@/utils/reducer/reducer.utils";
 import { createUserDocumentFromAuth, signInUserWithEmailAndPassword, UserData } from "@/utils/firebase/firebase.utils";
//import { ThunkAction } from "redux-thunk/es/types";
import {ThunkAction} from 'redux-thunk';
import { AnyAction } from "redux";
import {Dispatch} from 'redux'
import { RootState } from "@/store/store.utils";
import { ActionWithPayload } from "@/utils/reducer/reducer.utils";

export const setCurrentUser = (user: UserData) => createAction(USERTYPES.SET_CURRENT_USER, user)
export const userSignInStart = (email: string, password: string) => createAction(USERTYPES.USER_SIGNIN_START, {email, password})

export const userSignInSuccess = (user: UserData) => createAction(USERTYPES.USER_SIGNIN_SUCCESS, user)

export const userSignInFailed = (error: Error) => createAction(USERTYPES.USER_SIGNIN_FAILED, error)

export type signInTypes = typeof userSignInStart | typeof userSignInSuccess | typeof userSignInStart

//type create = typeof createAction;

export const userSignInAsync = (email: string, password: string): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch): Promise<void> => {
    dispatch(userSignInStart(email, password))

    try {
        const userCredential  = await signInUserWithEmailAndPassword(email, password);
        if (userCredential) {
          const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');
          if (userSnapshot) {
            dispatch(userSignInSuccess(userSnapshot.data()))
          }
          
        }
        // dispatch(userSignInSuccess(user))
        
    } catch (error) {
        dispatch(userSignInFailed(error as Error))
    }
}

// // try {
// //     const userCredential  = await signInUserWithEmailAndPassword(email, password);
// //     if (userCredential) {
// //       const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');
// //       if (userSnapshot) {
// //         console.log(userSnapshot.data())
// //       }
      
// //     }
// //   } catch (error) {
// //     console.error('error', error)
// //   }