import React, {InputHTMLAttributes} from "react";
import {FiAlertTriangle} from 'react-icons/fi';
import {FaCheck} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './form-input.styles.scss';

type FormInputProps = {
    label?: string;
    error?: string;
    type: string;
    htmlFor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({label = 'What\'s your email?', error, htmlFor = 'check', type,...otherProp}) => {
    return (
        <div className="form-input-container">
            {label && type !== 'radio' && type !== 'checkbox' && <label className="form-input-label" htmlFor={htmlFor}>{label}</label>}
            <div className="input-container">
                <input className = {`form-input ${error? 'danger': ''}`} id={htmlFor} name={htmlFor} type={type} {...otherProp}/>
                {(type === 'radio')? <span className="input-radio-span"></span>: '' }
                {(type === 'checkbox')?(
                     <IconContext.Provider value={{ className: "input-checkbox-check", style: {size: '2em'}}}>
                     <FaCheck  />
                     </IconContext.Provider>) : ''}
                {label && (type === 'radio' || type === 'checkbox') && <label className="form-input-label" htmlFor={htmlFor}>{label}</label>}
            </div>
            {error && <span className="form-input-error"> <FiAlertTriangle /> {error}</span>}
        </div>
    )
}

export default FormInput;