import { USERTYPES } from "./user.types";
import { UserData } from "@/utils/firebase/firebase.utils";
import { AnyAction } from "redux";
//import { signInTypes } from "./user.actions";


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

export const UserReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {

    switch(action.type) {
        case USERTYPES.USER_SIGNIN_START :
        case USERTYPES.USER_SIGNUP_START :
            return {...state, isLoading: true};

        case USERTYPES.USER_SIGNUP_SUCCESS :
            return {...state, isLoading: false}

        case USERTYPES.USER_SIGNIN_SUCCESS :
            return {...state, isLoading: false, currentUser: action.payload};

        case USERTYPES.USER_SIGNIN_FAILED :
        case USERTYPES.USER_SIGNUP_FAILED :
            return {...state, isLoading: false, error: action.payload};

        // case USERTYPES.SET_CURRENT_USER :
        //     return {...state, isLoading: false, currentUser: action.payload};

        default :
            return state;
    }

}