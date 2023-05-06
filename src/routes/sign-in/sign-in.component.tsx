import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "@/global-components/logo/logo.component";
import Button from "@/global-components/button/button.component";
import FormInput from "@/global-components/form-input/form-input.component";
import Error from "@/global-components/error/error.component";
import { userSignInAsync } from "@/store/reducers/user/user.reducerRT";
import './sign-in.styles.scss';
import { selectCurrentUser, selectError } from "@/store/reducers/user/user.selector";
import { useAppDispatch } from "@/hooks/hooks";
import apple from '../../assets/images/apple.svg'
import facebook from '../../assets/images/facebook.svg'
import google from '../../assets/images/google.svg'

import Checkbox from "@/global-components/checkboxes/checkboxes.component";

const defaultSignInFields = {
  email: '',
  password: '',
  remember: ''
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const error = useSelector(selectError);
  const [disabled, setDisabled] = useState(false);
  const [signInFields, setSignInFields] = useState(defaultSignInFields);
  const [emailError, setEmailError] = useState('');
  
  const { email, password } = signInFields;


  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !password) return;
    dispatch(userSignInAsync({email, password}));

    return setSignInFields(defaultSignInFields);
  }
  

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //e.preventDefault();
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

    return  (setSignInFields({...signInFields, [name]: value}))
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  } , [currentUser])

  useEffect(() => {
    if (!email || !password) {
      setDisabled(true)
    }else if (email && password) {
      setDisabled(false)
    }
  }, [email, password]);

  if (error) {
    return (
      <Error name={error.name} message={error.message} />
    )
  }

  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <header className="sign-in__logo">
          <Logo />
        </header>
        <h3 className="sign-in__h3">Please sign in to Spotify to continue.</h3>
        <div className="sign-in__buttons">
          <Button buttonType="facebook" ><img src={facebook} /> Sign up with Facebook</Button>
          <Button buttonType="apple" ><img src={apple} /> Sign up with Apple</Button>
          <Button ><img src={google} /> Sign up with Google</Button>
        </div>
        <div className="sign-in__dividers">
          <span className="sign-in__divider"></span> or <span className="sign-up__divider" style={{display: 'block', borderTop: '1px solid', width: '42.7%'}}></span>
        </div>
        <div className="sign-in__form">
          <form onSubmit={onSubmitHandler} className="sign-in__form-fields">
            <div className="sign-in__text-input">
              <FormInput 
                type="email"
                label="Email address or username"
                placeholder="Email address or username"
                htmlFor="email"
                name="email"
                value={email}
                error={emailError}
                onChange={onChangeHandler}
              />
              <div>
                <FormInput 
                  type="password"
                  label="Password"
                  placeholder="Password"
                  htmlFor="password"
                  name="password"
                  value={password}
                  onChange={onChangeHandler}
                />
                <span className="sign-in__profile">Do not you remember the password?</span>
              </div>
            </div>

            <div className="sign-in__check">
              <div className="sign-in__button">
                <Checkbox 
                  type="checkbox"
                  label="Remember me"
                  htmlFor="marketing"
                  name="remember"
                  value="Remember me"
                  top = '-2px'
                  onChange={onChangeHandler}
                />
                <Button type="submit" disabled = {disabled} buttonType="sign-in">Sign up</Button>
              </div>
              <span className="sign-in__divider2"></span>
            </div>
          </form>
          
          <div className="sign-in__redirect">
            <p>You dont have an account yet?</p>
            <Link to='/sign-up'>
              <Button><span className="sign-in__redirect--opacity">Sign up for spotify</span></Button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SignIn;