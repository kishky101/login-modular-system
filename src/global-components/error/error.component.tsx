import React from "react";

import './error.styles.scss'
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/hooks";
import { setError } from "@/store/reducers/user/user.reducerRT";

type ErrorProp = {
    name: string;
    message: string;
    url: string;
} & Error

const Error: React.FC<ErrorProp> = ({ name, message, url }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const refresh =() => {
        dispatch(setError(null))
        //navigate(`/${url}`)
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