import React from "react";
import FormInput from "@/global-components/form-input/form-input.component";
import Button from "@/global-components/button/button.component";

import './sign-in.styles.scss';

const SignIn: React.FC = () => {
    return (
        <>
            <h1>I am Sign In Page</h1>
            <FormInput type= {'text'} />
            <Button />
        </>
      
    )
}

export default SignIn;