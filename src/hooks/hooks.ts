import { useDispatch } from "react-redux";

//import { AppDispatch } from "@/store/store.utils";
//import { RootReducer } from "@/store/rootReducer";
import { RootState } from "@/store/store.utils";

//type DispatchFunc = () => AppDispatch;

//export const useAppDispatch: DispatchFunc = useDispatch;


//import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
 

//type AppState = ReturnType<typeof ootReducers>;

type TypedDispatch<T> = ThunkDispatch<T, unknown, AnyAction>;
 
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();

//export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// USE
//const dispatch = useAppDispatch();

//const state = useAppSelector((state: AppState) => state.xxx);