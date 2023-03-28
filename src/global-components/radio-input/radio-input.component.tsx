import React from 'react';
import { IconContext } from 'react-icons';
import { FiCheck } from 'react-icons/fi';
import './radio-input.styles.scss'

type RadioInputProps = {
    htmlFor: string;
    type: string;
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const RadioInput: React.FC<RadioInputProps> = ({htmlFor, type, label, ...otherProps}) => {
    return (
        <div className='radio-container'>
            <span className='radio-container__custom-check'>
                <IconContext.Provider value={{ className: "radio-container__check"}}>
                    <FiCheck  />
                </IconContext.Provider>
            </span>
            <label htmlFor={htmlFor} className='radio-container__input-label'>

                <input type={type} id={htmlFor} className='radio-container__input' {...otherProps}/>
                {label}
            </label>
        </div>
    )
}

export default RadioInput