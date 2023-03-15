import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import SignUp from './routes/sign-up/sign-up.component';
import SignIn from './routes/sign-in/sign-in.component';


const App: React.FC = () => (
  <Routes>
    <Route path='sign-in' element={<SignIn />} />
    <Route path='sign-up' element={<SignUp />} />
    <Route path='home' element={<Home />} />
  </Routes>
);

export default App;
