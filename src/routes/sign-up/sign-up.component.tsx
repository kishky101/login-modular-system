import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/hooks";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectError, selectSignupSuccess } from "@/store/reducers/user/user.selector";
import Logo from "@/global-components/logo/logo.component";
import Button from "@/global-components/button/button.component";
import FormInput from "@/global-components/form-input/form-input.component";
import SelectInput from "@/global-components/select-input/select-input.component";
import RadioInput from "@/global-components/radio-input/radio-input.component";
import Error from "@/global-components/error/error.component";
import { userSignUpAsync } from "@/store/reducers/user/user.reducerRT";
import google from '../../assets/images/google.svg'
import facebook from '../../assets/images/facebook.svg'
import './sign-up.styles.scss';


const defaultSignUpFields = {
  email: '',
  confirmEmail: '',
  password: '',
  profileName: '',
  month: '',
  day: '',
  year: '',
  gender: '',
  marketing: '',
}

const SignUp: React.FC = () => {
  const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const buttonRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectError);
  const signupSuccess = useSelector(selectSignupSuccess)
  const [disabled, setDisabled] = useState(true)
  const [signUpFields, setSignUpFields] = useState(defaultSignUpFields);
  const [emailError, setEmailError] = useState('');
  const [confirmEmailError, setConfirmEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [dayError, setDayError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [yearError, setYearError] = useState('');
  //const [monthError, setMonthError] = useState('');
  const dispatch = useAppDispatch();
  const {  
    email,
    confirmEmail,
    password,
    profileName,
    month,
    day,
    year,
    gender,
 } = signUpFields;

  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ( !email || !confirmEmail || !password || !profileName || !month || !day || !year || !gender ) {
      alert('all fields are required')
    }

    if (email !== confirmEmail) {
      alert('email doesn\'t match')
    }

    if (month === "") {
      alert('choose a valid month')
    }

    if (!gender) {
      setGenderError('choose your gender')
    }

    const dob = `${month}, ${day} ${year}`

    const additonalDetails = {
      dob,
      gender,
      profileName
    }

    await dispatch(userSignUpAsync({email, password, additonalDetails}))
  
    return setSignUpFields(defaultSignUpFields);
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const {name, value} = e.target

    if (name === 'email') {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const test = emailRegex.test(value);
      if (test) {
        setEmailError('')
      }else {
        setEmailError('Enter a valid email')
      }
    }
    if (name === 'confirmEmail') {
      if (value === email) {
        setConfirmEmailError('')
      }else {
        setConfirmEmailError('Enter a valid email')
      }
    }
    if (name === 'password') {
      const emailRegex = /[\w\d*@.]{6,}/;
      const test = emailRegex.test(value);
      if (test) {
        setPasswordError('')
      }else {
        setPasswordError('At least six characters')
      }
    }
    if (name === 'day') {
      if (Number(value) > 0 && Number(value) <= 31)  {
        setDayError('')
      }else {
        setDayError('from 1-31')
      }
    }
    if (name === 'year') {
      if (Number(value) > 1900 && Number(value) <= 2020)  {
        setYearError('')
      }else {
        setYearError('from 1900-2020')
      }
    }
    if (name === 'gender') {
      if (value) {
        setGenderError('')
      }else {
        setGenderError('choose your gender')
      }
    }

    return setSignUpFields({...signUpFields, [name]: value})
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  } , [currentUser])

  useEffect(() => {
    if (!email || !confirmEmail || !password || !profileName || !month || !day || !year || !gender) {
      setDisabled(true)
    }else if (email && confirmEmail && password && profileName && month && day && year && gender) {
      setDisabled(false)
    }
  }, [email, confirmEmail, password, profileName, month, day, year, gender,])
    
  if (error) {
    return (
      <Error name={error.name} message={error.message} />
    )
  }

  if (signupSuccess) {
    navigate('/sign-in')
  }

  // useEffect(() => {
   
  // }, [signupSuccess]) 
  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <header className="sign-up__logo">
          <Logo />
        </header>
        <h2 className="sign-up__h2">Sign up for free to start listening.</h2>
        <div className="sign-up__buttons">
          <Button buttonType="facebook" ><img src={facebook} /> Sign up with Facebook</Button>
          <Button ><img src={google} /> Sign up with Google</Button>
        </div>
        <div className="sign-up__dividers">
          <span className="sign-up__divider"></span> or <span className="sign-up__divider"></span>
        </div>
        <div className="sign-up__form">
          <h3 className="sign-up__h3">Sign up with your email address</h3>
          <form onSubmit={onSubmitHandler} className="sign-up__form-fields">
            <div className="sign-up__text-input">
              <FormInput 
                type="email"
                label="What is your email?"
                placeholder="Enter your email"
                htmlFor="email"
                name="email"
                value={email}
                error={emailError}
                onChange={onChangeHandler}
              />
              <FormInput 
                type="email"
                label="Confirm your email"
                placeholder="Enter your email again"
                name="confirmEmail"
                value={confirmEmail}
                error={confirmEmailError}
                onChange={onChangeHandler}
              />
              <FormInput 
                type="password"
                label="Create a password"
                placeholder="Create a password"
                htmlFor="password"
                name="password"
                value={password}
                error={passwordError}
                onChange={onChangeHandler}
              />
              <FormInput 
                type="text"
                label="What should we call you?"
                placeholder="Enter a profile name"
                htmlFor="profileName"
                name="profileName"
                value={profileName}
                onChange={onChangeHandler}
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
                    onChange={onChangeHandler}
                    name = 'month'
                  />
                </div>
                <FormInput
                  type="text"
                  label="Day"
                  placeholder="DD"
                  htmlFor="day"
                  margin="10px auto"
                  name="day"
                  value={day}
                  error={dayError}
                  onChange={onChangeHandler}
                />
                <FormInput
                  type="text"
                  label="Year"
                  placeholder="YYY"
                  htmlFor="year"
                  margin="10px auto"
                  name="year"
                  value={year}
                  error={yearError}
                  onChange={onChangeHandler}
                />
              </div>
            </fieldset>
            <fieldset className="sign-up__fieldset sign-up__fieldset--radios">
              <legend className="sign-up__legend">What&apos;s your gender</legend>
              <div className="sign-up__radios">
                <RadioInput 
                  type="radio"
                  label="Male"
                  name="gender"
                  htmlFor="male"
                  value="male"
                  onChange={onChangeHandler}
                />
                <RadioInput 
                  type="radio"
                  label="Female"
                  name="gender"
                  htmlFor="female"
                  value="female"
                  onChange={onChangeHandler}
                />
                <RadioInput 
                  type="radio"
                  label="Non-binary"
                  name="gender"
                  htmlFor="non-binary"
                  value="non-binary"
                  onChange={onChangeHandler}
                />
                <RadioInput 
                  type="radio"
                  label="Other"
                  name="gender"
                  htmlFor="other"
                  value="other"
                  onChange={onChangeHandler}
                />
                <RadioInput 
                  type="radio"
                  label="Prefer not to say"
                  name="gender"
                  htmlFor="not-say"
                  value="Prefer not to say"
                  onChange={onChangeHandler}
                />
              </div>
              <span>{genderError}</span>
            </fieldset>
            <div className="sign-up__marketing">
              <RadioInput 
                type="checkbox"
                label="Share my registration date with Spotify’s content providers for marketing purposes."
                htmlFor="marketing"
                name="marketing"
                value='yes'
                onChange={onChangeHandler}
              />
            </div>

            <div className="sign-up__p">
              <p className="sign-up__agree">By clicking on sign-up you agree to spotify&apos;s <a href="#" className="sign-up__agree--link">Terms and Conditions of Use</a>.</p>
              <p className="sign-up__terms">To learn more about how. Spotify collects, uses, shares and protects your personal data, please see <a href="#" className="sign-up__terms--link">Spotify’s Privacy Policy</a>.</p>
            </div>
            <div className="sign-up__button" ref={buttonRef}>
              <Button type="submit" disabled={disabled} buttonType="sign-in">Sign up</Button>
            </div>
          </form>
          <p className="sign-up__redirect">Have an account? <Link to='/sign-in' className="sign-up__redirect--link">Log in</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp;