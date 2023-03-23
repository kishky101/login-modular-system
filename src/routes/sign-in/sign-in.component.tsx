import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "@/global-components/logo/logo.component";
import Button from "@/global-components/button/button.component";
import FormInput from "@/global-components/form-input/form-input.component";
//import {  createUserDocumentFromAuth, signInUserWithEmailAndPassword } from "@/utils/firebase/firebase.utils";
//import { setCurrentUser } from "@/store/reducers/user/user.actions";
import { userSignInAsync } from "@/store/reducers/user/user.actions";
import './sign-in.styles.scss';
import { selectCurrentUser } from "@/store/reducers/user/user.selector";
//import {userSignInAsync} from '../../store/reducers/user/user.actions.js'
import { useAppDispatch } from "@/hooks/hooks";
const defaultSignInFields = {
  email: '',
  password: '',
  remember: ''
}

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser)
  console.log(currentUser)
  const [signInFields, setSignInFields] = useState(defaultSignInFields);

  const { email, password } = signInFields;
  //console.log(signInFields)

  const onSubmitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !password) return;
    dispatch(userSignInAsync(email, password))
    // try {
    //   const userCredential  = await signInUserWithEmailAndPassword(email, password);
    //   if (userCredential) {
    //     const userSnapshot = await createUserDocumentFromAuth(userCredential?.user, 'users');
    //     if (userSnapshot) {
    //       dispatch(setCurrentUser(userSnapshot.data()))
    //       //console.log(userSnapshot.data())
    //     }
        
    //   }
    // } catch (error) {
    //   console.error('error', error)
    // }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {name, value} = e.target

    return  (setSignInFields({...signInFields, [name]: value}))
  }

  return (
    <div className="sign-in">
      <div className="sign-in__container">
        <header className="sign-in__logo">
          <Logo />
        </header>
        <h3 className="sign-in__h3">Please sign in to Spotify to continue.</h3>
        <div className="sign-in__buttons">
          <Button buttonType="facebook" ><img src="/src/assets/images/facebook.svg" /> Sign up with Facebook</Button>
          <Button buttonType="apple" ><img src="/src/assets/images/apple.svg" /> Sign up with Apple</Button>
          <Button ><img src="/src/assets/images/google.svg" /> Sign up with Google</Button>
        </div>
        <div className="sign-in__dividers">
          <span className="sign-in__divider"></span> or <span className="sign-up__divider"></span>
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
                onChange={onChangeHandler}
              />
              <FormInput 
                type="password"
                label="Password"
                placeholder="Password"
                htmlFor="password"
                name="password"
                value={password}
                onChange={onChangeHandler}
              />
              <span className="sign-in__profile">Do you not remember the password?</span>
            </div>

            <div className="sign-in__marketing">

            </div>
            <div className="sign-in__button">
              <div className="sign-in__check">
                <FormInput 
                  type="checkbox"
                  label="Remember me"
                  htmlFor="marketing"
                  name="remember"
                  value="Remember me"
                  onChange={onChangeHandler}
                />
              </div>
              <Button type="submit" buttonType="sign-in">Sign up</Button>
            </div>
          </form>
          <span className="sign-in__divider2"></span>
          <div className="sign-in__redirect">
            <p>You do not have an account yet?</p>
            <Button><span className="sign-in__redirect--opacity">Sign up for spotify</span></Button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SignIn;