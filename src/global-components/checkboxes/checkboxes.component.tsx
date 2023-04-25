import React from "react"
import './checkboxes.styles.scss'

type CheckboxProps = {
    htmlFor: string;
    type: string;
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Checkbox: React.FC<CheckboxProps> = ({type, htmlFor, label, ...otherProps}) => {
    let value;
    if (type === 'checkbox') {
        value = 'checkbox'
    }else if (type === 'radio'){
        value = 'radio'
    }

    return (
        <>
            <label htmlFor={htmlFor} className={`${value}-labeling`} ><span>{label}</span>
                <input id={htmlFor} type={type} className={`${value}-labeling__checkbox`} {...otherProps} />
                <span className={`${value}-labeling__checkmark`}></span>
            </label>
        </>
    )
}

export default Checkbox