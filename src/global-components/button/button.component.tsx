import React, {ButtonHTMLAttributes} from "react";

import './button.styles.scss';

type ButtonProps = {
    buttonType?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>


const Button: React.FC<ButtonProps> = ({buttonType, children = 'submit', ...otherProp}) => {
    return (
        <div className="button-container">
            <button className={`button 
            ${buttonType === 'facebook'? 'button--facebook': "" } 
            ${buttonType === 'apple'? 'button--apple': "" } 
            ${buttonType === 'sign-in'? 'button--sign-in': "" }`} {...otherProp}>{children}</button>
        </div>
    )
}

export default Button;