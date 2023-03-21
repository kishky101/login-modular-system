import React from "react";
import Logo from "@/global-components/logo/logo.component";
import Button from "@/global-components/button/button.component";
import FormInput from "@/global-components/form-input/form-input.component";
import SelectInput from "@/global-components/select-input/select-input.component";

import './sign-up.styles.scss';

const SignUp: React.FC = () => {
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <header className="sign-up__logo">
          <Logo />
        </header>
        <h2 className="sign-up__h2">Sign up for free to start listening.</h2>
        <div className="sign-up__buttons">
          <Button buttonType="facebook" ><img src="/src/assets/images/facebook.svg" /> Sign up with Facebook</Button>
          <Button ><img src="/src/assets/images/google.svg" /> Sign up with Google</Button>
        </div>
        <div className="sign-up__dividers">
          <span className="sign-up__divider"></span> or <span className="sign-up__divider"></span>
        </div>
        <div className="sign-up__form">
          <h3 className="sign-up__h3">Sign up with your email address</h3>
          <form className="sign-up__form-fields">
            <div className="sign-up__text-input">
              <FormInput 
                type="email"
                label="What is your email?"
                placeholder="Enter your email"
                htmlFor="email"
              />
              <FormInput 
                type="email"
                label="Confirm your email"
                placeholder="Enter your email again"
              />
              <FormInput 
                type="password"
                label="Create a password"
                placeholder="Create a password"
                htmlFor="password"
              />
              <FormInput 
                type="text"
                label="What should we call you?"
                placeholder="Enter a profile name"
                htmlFor="profileName"
              />
              <span className="sign-up__profile">This appears on your profile.</span>
            </div>
            <fieldset className="sign-up__fieldset">
              <legend className="sign-up__legend">What&apos;s your date of birth</legend>
              <div className="sign-up__date">
                <div className="sign-up__select">
                  <p className="sign-up__month">Month</p>
                  <SelectInput 
                    options={months} 
                    placeHolder="Month" 
                    onChange={(e) => console.log(e)}
                  />
                </div>
                <FormInput
                  type="number"
                  label="Day"
                  placeholder="DD"
                  htmlFor="day"
                  width="110px"
                  margin="10px auto"
                  max={31}
                  min={1}
                />
                <FormInput
                  type="number"
                  label="Year"
                  placeholder="YYY"
                  htmlFor="year"
                  width="119px"
                  margin="10px auto"
                  max={2020}
                  min={1900}
                />
              </div>
            </fieldset>
            <fieldset className="sign-up__fieldset sign-up__fieldset--radios">
              <legend className="sign-up__legend">What&apos;s your gender</legend>
              <div className="sign-up__radios">
                <FormInput 
                  type="radio"
                  label="Male"
                  name="gender"
                  htmlFor="male"
                  value="male"
                />
                <FormInput 
                  type="radio"
                  label="Female"
                  name="gender"
                  htmlFor="female"
                  value="female"
                />
                <FormInput 
                  type="radio"
                  label="Non-binary"
                  name="gender"
                  htmlFor="non-binary"
                  value="non-binary"
                />
                <FormInput 
                  type="radio"
                  label="Other"
                  name="gender"
                  htmlFor="other"
                  value="other"
                />
                <FormInput 
                  type="radio"
                  label="Prefer not to say"
                  name="gender"
                  htmlFor="not-say"
                  value="Prefer not to say"
                />
              </div>
            </fieldset>
            <div className="sign-up__marketing">
              <FormInput 
                type="checkbox"
                label="Share my registration date with Spotify’s content providers for marketing purposes."
                htmlFor="marketing"
              />
            </div>

            <div className="sign-up__p">
              <p className="sign-up__agree">By clicking on sign-up you agree to spotify&apos;s <a href="#" className="sign-up__agree--link">Terms and Conditions of Use</a></p>
              <p className="sign-up__terms">To learn more about how. Spotify collects, uses, shares and protects your personal data, please see <a href="#" className="sign-up__terms--link">Spotify’s Privacy Policy.</a></p>
            </div>
            <div className="sign-up__button">
              <Button buttonType="sign-in">Sign up</Button>
            </div>
          </form>
          <p className="sign-up__redirect">Have an account? <a href="#" className="sign-up__redirect--link">Log in</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;