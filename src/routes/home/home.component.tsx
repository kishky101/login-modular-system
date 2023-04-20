import React, {useEffect} from "react";
import Button from "@/global-components/button/button.component";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoading } from "@/store/reducers/user/user.selector";
import { userSignOutAsync } from "@/store/reducers/user/user.reducerRT";
import { useAppDispatch } from "@/hooks/hooks";
import Spinner from "@/global-components/spinner/spinner.component";
import './home.styles.scss';


const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate()
  //console.log(auth.currentUser)
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
    </>
    
  )
}

export default Home;