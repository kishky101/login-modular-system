import React, {InputHTMLAttributes} from "react";
import {FiAlertTriangle} from 'react-icons/fi';


import './form-input.styles.scss';

type FormInputProps = {
    label?: string;
    error?: string;
    type: string;
    htmlFor?: string;
    margin?: string;
    padding?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({label, error, htmlFor, type, margin, padding, ...otherProp}) => {
    return (
        <div className="form-input-container">
            {label && type !== 'radio' && type !== 'checkbox' && <label className="form-input-container__input-label" htmlFor={htmlFor}>{label}</label>}
            <div className="form-input-container__input-container">
                <input className = {`form-input-container__input ${error? 'form-input-container__input--danger': ''}`} id={htmlFor} type={type} {...otherProp} style={{margin, padding}} />
            </div>
            {error && <span className="form-input-container__error"> <FiAlertTriangle /> {error}</span>}
        </div>
    )
}

export default FormInput;