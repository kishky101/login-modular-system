import React from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { setError } from "@/store/reducers/user/user.reducerRT";

import './error.styles.scss'


type ErrorProp = {
    name: string;
    message: string;
} & Error

const Error: React.FC<ErrorProp> = ({ name, message }) => {

    const dispatch = useAppDispatch();
    const refresh =() => {
        dispatch(setError(null))
    }
    return (
        <div className="error">
            <div className="error__box">
                <h3 className="error__h3">{name}</h3>
                <p className="error__p">{message}</p>
                <button className="error__button" onClick={refresh}>Ok</button>
            </div>
        </div>
    )
}

export default Error;