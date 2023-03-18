import React from "react";
import FormInput from "@/global-components/form-input/form-input.component";
import Button from "@/global-components/button/button.component";
import Logo from "@/global-components/logo/logo.component";
import SelectInput from "@/global-components/select-input/select-input.component";

import './sign-in.styles.scss';

const SignIn: React.FC = () => {
    return (
        <>
            <h1>I am Sign In Page</h1>
            <FormInput type= {'checkbox'} />
            <Button />
            <Logo />
            <SelectInput placeHolder="" options={['boy', 'girl', 'prefer not to say', 'house', 'child', '1', '2', '3', '4', '5', '6', '7']} onChange={(e) => console.log(e.target.name)} />
            <div style={{height: '500px', border: '1px solid red'}}></div>
        </>
      
    )
}

export default SignIn;