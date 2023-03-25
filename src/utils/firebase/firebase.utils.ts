// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import {Auth} from 'firebase/auth';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
    onAuthStateChanged,
    User,
    NextOrObserver
    
} from "firebase/auth";

import {
    getFirestore,
    getDoc,
    setDoc,
    doc,
    QueryDocumentSnapshot
} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChsEt8iUY99fiBTZ81r5sS62Kt9WKO9KY",
  authDomain: "spotify-login-efe52.firebaseapp.com",
  projectId: "spotify-login-efe52",
  storageBucket: "spotify-login-efe52.appspot.com",
  messagingSenderId: "442489940410",
  appId: "1:442489940410:web:efb6e34da3d51025819583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export type AdditionalInfo = {
    profileName?: string;
    dob?: string;
    gender?: string;
}

export type UserData = {
    createdAt: Date;
    displayName: string;
    email: string;
} & AdditionalInfo;

export const createUserDocumentFromAuth = async (userObj: User, collection: string, additionalInfo?: AdditionalInfo): Promise<void | QueryDocumentSnapshot<UserData>> => {
    if (!userObj) return

    const userDocRef = doc(db, collection, userObj.uid);

    const userSnapshot =await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const {displayName, email} = userObj;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                createdAt,
                displayName,
                email,
                ...additionalInfo
            }) 
        } catch (error) {
            console.log(error)
        }
    }

    return userSnapshot as QueryDocumentSnapshot<UserData>;
}

export const auth = getAuth()

export const createAuthUserFromEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const authStateChangeListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCurrentUser = async (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            },
            reject
        )
    })
}

