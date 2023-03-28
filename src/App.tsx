import React, {lazy, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
//import Home from './routes/home/home.component';
//import SignUp from './routes/sign-up/sign-up.component';
//import SignIn from './routes/sign-in/sign-in.component';
import Spinner from './global-components/spinner/spinner.component';
import { useAppDispatch } from './hooks/hooks';
//import { userCheckAsync } from './store/reducers/user/user.actions';
import { userCheckAsync } from './store/reducers/user/user.reducerRT';

const SignUp = lazy(() => import('./routes/sign-up/sign-up.component'));
const SignIn = lazy(() => import('./routes/sign-in/sign-in.component'));
const Home = lazy(() => import('./routes/home/home.component'))

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  
  dispatch(userCheckAsync())
  return(
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route index path='/' element={<Home />} />
      </Routes>
    </Suspense>
  );
} 

export default App;
