import React, {useEffect} from "react";
import Button from "@/global-components/button/button.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoading } from "@/store/reducers/user/user.selector";
import { userSignOutAsync } from "@/store/reducers/user/user.reducerRT";
import { useAppDispatch } from "@/hooks/hooks";
import Spinner from "@/global-components/spinner/spinner.component";
import Checkbox from "@/global-components/checkboxes/checkboxes.component";
import './home.styles.scss';


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      return navigate('/sign-in')
    }
  })

  

  const signOutHandler = () => {
    dispatch(userSignOutAsync())
  }


  return (
    <>
      {
        isLoading? <Spinner /> : 
        <div className="home-page">
          <h1>welcome {currentUser?.profileName}</h1>
          <Button buttonType="sign-in" onClick={signOutHandler}>Sign Out</Button>
        </div>
      }
      <div className="testing">
        <Checkbox 
          type="radio"
          label="Male"
          name="gender"
          htmlFor="male"
          value="male"
        />
        <Checkbox 
          type="radio"
          label="Female"
          name="gender"
          htmlFor="female"
          value="female"
        />
        <Checkbox 
          type="radio"
          label="Non-binary"
          name="gender"
          htmlFor="non-binary"
          value="non-binary"
        />
        <Checkbox 
          type="checkbox"
          label="Other"
          name="gender"
          htmlFor="other"
          value="other"
          top="0"
        />
        <Checkbox 
          type="checkbox"
          label="Prefer not to say"
          name="gender"
          htmlFor="not-say"
          value="Prefer not to say"
          top="0"
        />
      </div>
    </>
    
  )
}

export default Home;