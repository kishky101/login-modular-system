import React from "react"
import './checkboxes.styles.scss'

type CheckboxProps = {
    htmlFor: string;
    type: string;
    label: string;
    top?: string;
    top2?: string;
} & React.InputHTMLAttributes<HTMLInputElement>

const Checkbox: React.FC<CheckboxProps> = ({type, htmlFor, label, top, top2, ...otherProps}) => {
    let value;
    if (type === 'checkbox') {
        value = 'checkbox'
    }else if (type === 'radio'){
        value = 'radio'
    }

    return (
        <>
            <label htmlFor={htmlFor} className={`${value}-labeling`} style={{top: top2}}><span>{label}</span>
                <input id={htmlFor} type={type} className={`${value}-labeling__checkbox`} {...otherProps} />
                <span className={`${value}-labeling__checkmark`} style={{top}}></span>
            </label>
        </>
    )
}

export default Checkbox